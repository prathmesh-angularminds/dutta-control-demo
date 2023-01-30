import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCustomerRoutingModule } from './edit-customer-routing.module';
import { EditCustomerComponent } from './edit-customer.component';
import { AddressComponent } from './address/address.component';
import { ContactPersonsComponent } from './contact-persons/contact-persons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EditCustomerComponent, AddressComponent, ContactPersonsComponent],
  imports: [
    CommonModule,
    EditCustomerRoutingModule,
   ReactiveFormsModule,
   RouterModule
  ]
})
export class EditCustomerModule { }
