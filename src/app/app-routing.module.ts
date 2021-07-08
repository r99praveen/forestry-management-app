import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { MaintainProductsComponent } from './maintain-products/maintain-products.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ThanksMessageComponent } from './thanks-message/thanks-message.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [


  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent},
  { path: 'customer-info', component: CustomerInfoComponent},
  { path: 'thanks-message', component: ThanksMessageComponent},
  { path: 'admthanksin', component: AdminComponent},
  { path: 'maintain-products', component: MaintainProductsComponent},
  { path : 'add-customer' , component: AddCustomerComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'order', component:OrderComponent},
  { path: 'scheduler/:id', component: SchedulerComponent},
  { path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
