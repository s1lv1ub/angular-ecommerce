import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import e from 'express';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[]=[];
  currentCategoryId: number = 1;
  previousCategoryId: number=1;

  searchMode: boolean = false;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 6;
  theTotalElements: number = 0;
  
  constructor(private productService: ProductService, 
    private cartService: CartService,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  
  }
  listProducts() {
  this.searchMode = this.route.snapshot.paramMap.has('keyword');
   if (this.searchMode) {
    this.handleSearchProducts();
   } else {
    this.handleListProducts();
   }
  }

  handleListProducts(){
// check if "id" parameter is available
    
const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

// get the "id" param string. convert string to a number using the "+" symbol
if (hasCategoryId) {
  this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
}else{
  // no category id available ... default to category id 1
  this.currentCategoryId=1;
}

// now get the products for the given category id
// Check if we have a different category than previous
// Note: Angular will reuse a component if it is currently being viewed
// if we have a different category id than previous
// then set the page number back to 1
//
if (this.currentCategoryId != this.previousCategoryId) {
  this.thePageNumber = 1;
}
this.previousCategoryId = this.currentCategoryId;

console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

this.productService.getProductListPaginate(this.thePageNumber - 1, 
                                           this.thePageSize, 
                                          this.currentCategoryId)
                                          .subscribe(data => {
                                            this.products=data._embedded.products;
                                            this.thePageNumber=data.page.number+1;
                                            this.thePageSize=data.page.size;
                                            this.theTotalElements=data.page.totalElements;
                                          });

  }

  handleSearchProducts(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(theKeyword).subscribe(data => {this.products=data});
  }

  addToCart(theProduct: Product){
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`); 
    //TODO ... do the real work
    const theCadtItem = new CartItem(theProduct);
    this.cartService.addToCart(theCadtItem);
  }
}
