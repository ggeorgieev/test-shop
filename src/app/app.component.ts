import {Component} from '@angular/core';
import {CartItem} from "./entities/cart.item";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    getCartItemsCount(): number {
        if(localStorage.getItem('cart') == null) {
            return 0;
        } else {
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            let count = 0;
            for (let i = 0; i < cart.length; i++) {
                let cartItem: CartItem = JSON.parse(cart[i]);
                count += cartItem.quantity;
            }
            return count;
        }
    }
}
