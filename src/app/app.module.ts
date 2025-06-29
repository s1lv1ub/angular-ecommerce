import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailesComponent } from './components/cart-detailes/cart-detailes.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'checkout', component: CheckoutComponent},
  {path:'cart-details', component: CartDetailesComponent},
  {path:'products/:id', component: ProductDetailsComponent},
  {path:'search/:keyword', component: ProductListComponent},
  {path:'category/:id', component: ProductListComponent},
  {path:'category', component: ProductListComponent},
  {path:'products', component: ProductListComponent},
  {path:'',redirectTo: '/products', pathMatch: 'full'},
  {path:'**', redirectTo:'/products',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    CartStatusComponent,
    ProductDetailsComponent,
    CartDetailesComponent,
    CheckoutComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    CommonModule ,
    NgbModule,
    ReactiveFormsModule
 
],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
