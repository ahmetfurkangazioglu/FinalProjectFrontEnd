import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartItems';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addTocart(product:product){
    let item = CartItems.find(c=>c.product.productId===product.productId)
    if(item){
      item.quantity+=1;
    }
    else{
      let cartItem = new CartItem()
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(product:product){
    let item:CartItem = CartItems.find(c=>c.product.productId===product.productId)
    CartItems.splice(CartItems.indexOf(item),1)
  }

  list():CartItem[]{
    return CartItems;
  }
}
