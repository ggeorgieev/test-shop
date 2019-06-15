import {Injectable} from "@angular/core";
import {Product} from "../entities/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>("assets/api/products.json");
    }
}
