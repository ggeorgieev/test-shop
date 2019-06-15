import {Product} from "../../entities/product";
import {Component, OnInit} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private products: Product[];

    constructor(private productService: ProductService,
                private cartService: CartService) { }

    ngOnInit() {
        this.productService.findAll()
            .subscribe((data) => this.products = data);
    }

    addToCart(product : Product) {
        this.cartService.addToCart(product);
    }

    updateProducts(products: Product[]) {
        this.products = products;
    }
}
