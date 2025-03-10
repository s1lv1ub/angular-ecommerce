import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-product-list',
  standalone: false,  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[]=[];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute){ }

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
this.productService.getProductList(this.currentCategoryId).subscribe(data => {this.products=data});

  }

  handleSearchProducts(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(theKeyword).subscribe(data => {this.products=data});
  }

}
