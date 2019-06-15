import {Injectable} from "@angular/core";
import {Product} from "../entities/product";
import {CartItem} from "../entities/cart.item";
import {Cart} from "../entities/cart";

@Injectable()
export class CartService {

    addToCart(product: Product) {
        let cartItem: CartItem = {
            product: product,
            quantity: 1
        };
        if (localStorage.getItem('cart') == null) {
            let cache: any = [];
            cache.push(JSON.stringify(cartItem));
            localStorage.setItem('cart', JSON.stringify(cache));
        } else {
            let cache: any = JSON.parse(localStorage.getItem('cart'));
            let index: number = -1;
            for (let i = 0; i < cache.length; i++) {
                let item: CartItem = JSON.parse(cache[i]);
                if (item.product.id == product.id) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                cache.push(JSON.stringify(cartItem));
                localStorage.setItem('cart', JSON.stringify(cache));
            } else {
                let item: CartItem = JSON.parse(cache[index]);
                item.quantity += 1;
                cache[index] = JSON.stringify(item);
                localStorage.setItem("cart", JSON.stringify(cache));
            }
        }
    }

    loadCart(): Cart {
        let cart : Cart = {
            items: [],
            total: 0
        };
        let cache = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < cache.length; i++) {
            let item = JSON.parse(cache[i]);
            cart.items.push({
                product: item.product,
                quantity: item.quantity
            });
            cart.total += item.product.price * item.quantity;
        }

        return cart;
    }

    remove(id: string): void {
        let cache: any = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < cache.length; i++) {
            let item: CartItem = JSON.parse(cache[i]);
            if (item.product.id == id) {
                cache.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cache));
    }
}
