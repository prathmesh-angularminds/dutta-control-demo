import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


@NgModule({
  declarations: [EditCustomerComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule { }
