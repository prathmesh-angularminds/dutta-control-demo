import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCustomerModule } from './edit-customer/edit-customer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    EditCustomerModule,
    LayoutsModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
