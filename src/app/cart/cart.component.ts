import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  carts: Cart[] = [];

  quantity : any= [];

  totalPrice: number = 0;

  cart: Cart = new Cart();

  order: Order = new Order();
  OrderService: any;

  // OrderService: any;



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  private getCartItems() {
    this.cartService.listCartItems().subscribe(data => { this.carts = data, console.log(data) });
  }


  calculate(i: any) {

    this.totalPrice += parseInt(this.carts[i].price) * parseInt(this.quantity[i]);

    this.updateQuantity(i, this.quantity[i]);
  }

  deleteCartItem(id: number) {
    this.cartService.deleteCartItem(id).subscribe(data => {
      console.log(data),
        alert("DO YOU WANT TO REMOVE THIS ITEM FROM CART?");
      this.getCartItems();
    }, error => console.log(console.error))
  }

  updateQuantity(i: any ,quantity: any){
    this.cart = this.carts[i];
    this.cart.quantity = quantity;
    this.cart.total_price = String(parseInt(this.cart.price) * parseInt(quantity));
    this.cartService.UpdateCart(this.cart).subscribe(data => {

    }, error => console.log(error));



  }


  placeOrder(i : any) {
    console.log(this.order[i])

    this.order.cartItem = this.cart[i].name;
 
    this.order.totalPrice = this.cart[i].totalPrice;

    this.order.quantity = this.cart[i].quantity;
    
    
    // this.cart.quantity = "1";
 
    console.log(this.order)
 
    this.OrderService.placeOrder(this.order).subscribe(data => {
      console.log(data);
      alert("one cartItem added to order");
})


  }




}