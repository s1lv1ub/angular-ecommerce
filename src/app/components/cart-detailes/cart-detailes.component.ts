import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-detailes',
  standalone: false,
  templateUrl: './cart-detailes.component.html',
  styleUrl: './cart-detailes.component.css'
})
export class CartDetailesComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {

   }
  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {

    // get a handle to the cart service
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice and totalQuantity
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart total price and total quantity  
    this.cartService.computeCartTotals();
  }

}
