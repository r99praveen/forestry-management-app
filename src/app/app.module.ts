import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ThanksMessageComponent } from './thanks-message/thanks-message.component';
import { MaintainProductsComponent } from './maintain-products/maintain-products.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { OrderComponent } from './order/order.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SchedulerLoginComponent } from './scheduler-login/scheduler-login.component';
import { SchedulerRegistrationComponent } from './scheduler-registration/scheduler-registration.component';
import { AdminSchedulerComponent } from './admin-scheduler/admin-scheduler.component';

import { ContractComponent } from './contract/contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { UpdateContarctComponent } from './update-contarct/update-contarct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    AdminComponent,
    CustomerInfoComponent,
    ThanksMessageComponent,
    MaintainProductsComponent,
    SchedulerComponent,
    AddProductComponent,
    UpdateProductComponent,
    CustomerListComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    OrderComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    AdminRegistrationComponent,
    AdminLoginComponent,
    SchedulerLoginComponent,
    SchedulerRegistrationComponent,
    AdminSchedulerComponent,
    ContractComponent,
    AddContractComponent,
    ProductFilterPipe,
    UpdateContarctComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  exports: [
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }