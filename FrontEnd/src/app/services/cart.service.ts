import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cardItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart=this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food:Food){
    let cardItem=this.cart.items.find(item=>item.food.id===food.id);
    if(cardItem){
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }
  removeFromCart(foodId:string):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id!=foodId);
    this.setCartToLocalStorage();
  }
  changeQuantity(foodId:string,quantity:number){
    let CartItem=this.cart.items.find(item=>item.food.id===foodId);
    if(!CartItem){
      return;
    }
    //due to below two line reference of cart is also changed like destructuring
    CartItem.quantity=quantity;
    CartItem.price=quantity * CartItem.food.price;
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart=new Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable():Observable<Cart>{
    return  this.cartSubject.asObservable();//we only want to change cart in service
  }
  getCart():Cart{
    return this.cartSubject.value;//we only want latest value
  }
  private setCartToLocalStorage():void{

    this.cart.totalPrice=this.cart.items.reduce((prevSum,currentItem)=>prevSum+currentItem.price,0);
    this.cart.totalCount=this.cart.items.reduce((prevSum,currentItem)=>prevSum+currentItem.quantity,0)
    const cartJson=JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);//here we also need to notify the changes
  }
  private getCartFromLocalStorage():Cart{
    const cartJson=localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson):new Cart();
  }

}
