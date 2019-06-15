import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {SearchComponent} from "./components/search/search.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        CartComponent,
        CheckoutComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        ProductService,
        CartService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
