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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonFooterComponent } from './sub-components/common-footer/common-footer.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './sub-components/form/form.component';
import { InputTextComponent } from './sub-components/form/input-text/input-text.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CheckBoxComponent } from './sub-components/form/check-box/check-box.component';

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
    FormComponent,
    InputTextComponent,
    SignUpComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
