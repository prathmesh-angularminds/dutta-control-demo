import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/layouts/app/app.component";
import { AddressComponent } from "./edit-customer/address/address.component";
import { ContactPersonsComponent } from "./edit-customer/contact-persons/contact-persons.component";
import { EditCustomerComponent } from "./edit-customer/edit-customer.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: AppComponent,
    children: [
      {
        path: "",
        component: EditCustomerComponent,
        children: [
          { path: "address", component: AddressComponent },
          { path: "contact-persons", component: ContactPersonsComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
