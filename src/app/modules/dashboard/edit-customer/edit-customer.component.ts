import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"],
})
export class EditCustomerComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  customerForm!: FormGroup;

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customerType: new FormControl(),
      primaryContact: new FormGroup({
        title: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      companyName: new FormControl(),
      customerDisplayName: new FormControl(),
      email: new FormControl(),
      phone: new FormGroup({
        work: new FormControl(),
        mobile: new FormControl(),
      }),
      website: new FormControl(),
    });
  }

  submitForm(){
    console.log(this.customerForm.value);
    
  }

}
