import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderLabelComponent } from './sub-components/header-label/header-label.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonFooterComponent } from './sub-components/common-footer/common-footer.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoggerDirective } from './logger.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderLabelComponent,
    HomePageComponent,
    ProductPageComponent,
    CartComponent,
    CheckoutPageComponent,
    CommonFooterComponent,
    LoggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
