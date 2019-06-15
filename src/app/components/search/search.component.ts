import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Product} from "../../entities/product";
import {ProductService} from "../../services/product.service";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    private searchInput: string;

    @Input()
    private products: Product[];

    @Output()
    private productsChanged = new EventEmitter();

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        if(localStorage.getItem("searchInput") != null) {
            this.searchInput = localStorage.getItem("searchInput");
            this.onSearchInput(this.searchInput);
        }
    }

    onSearchInput(newValue: string): void {
        this.productService.findAll()
            .subscribe((data) => {
                if(newValue || newValue.length != 0) {
                    this.products = data.filter(value => value.name.toLowerCase()
                        .includes(newValue.toLowerCase()));
                } else {
                    this.products = data;
                }
                this.productsChanged.emit(this.products);
                localStorage.setItem("searchInput", newValue);
            });
    }
}
