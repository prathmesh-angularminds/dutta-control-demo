import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';



@NgModule({
  declarations: [
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
