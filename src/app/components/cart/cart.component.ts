import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {CartService} from "../../services/cart.service";
import {Cart} from "../../entities/cart";
import {Product} from "../../entities/product";

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    private cart : Cart;

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.cart = this.cartService.loadCart();
    }

    remove(id: string): void {
        this.cartService.remove(id);
        this.cart = this.cartService.loadCart();
    }

    add(product: Product): void {
        this.cartService.addToCart(product);
        this.cart = this.cartService.loadCart();
    }
}
