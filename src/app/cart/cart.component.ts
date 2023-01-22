import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ICartProduct } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsCart: ICartProduct[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.itemsCart = this.cartService.getCart();
      this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.itemsCart.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }

  removeFromCart(productId: number) {
    this.itemsCart = this.itemsCart.filter(item => item.id !== productId);
    this.cartService.removeFromCart(productId);
    this.calculateTotal();
  }

  pay() {
    alert("You completed your purchase!");
    this.cartService.cleanCart();
    this.router.navigate(["products"])

  }


}
