import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

type tabContent = "address" | "details" | "contact-person" | "remarks";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"],
})
export class EditCustomerComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  // forms
  customerForm!: FormGroup;
  contactPersonsForm!: FormGroup;
  billingAddressForm!: FormGroup;
  shippingAddressForm!: FormGroup;
  currentTab! : tabContent;

  ngOnInit(): void {

    this.currentTab = 'address'

    // customer form
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

    // billing address Form

    this.billingAddressForm = this.fb.group({
      attention: new FormControl(),
      addressLine: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pin: new FormControl(),
      phone: new FormControl(),
    });

    // shipping address form
    this.shippingAddressForm = this.fb.group({
      attention: new FormControl(),
      addressLine: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pin: new FormControl(),
      phone: new FormControl(),
    });

    // contact persons form
    this.contactPersonsForm = this.fb.group({
      persons: new FormArray([
        this.fb.group({
          salutation: new FormControl(""),
          firstname: new FormControl("rohit"),
          lastname: new FormControl("gaikwad"),
          email: new FormControl(""),
          phone: new FormControl(""),
          mobile: new FormControl(""),
        }),
      ]),
    });
  }

  //get controls of formarray 
  get person() {
    return this.contactPersonsForm.controls["persons"] as FormArray;
  }

  // customerForm submit
  submitCustomerForm() {
    console.log(this.customerForm.value);
  }

  // billing form submit

  submitBillingAddressForm() {
    console.log(this.billingAddressForm.value);
  }

  // function to copy billing address form
  fillShippingForm() {
    this.shippingAddressForm.setValue(this.billingAddressForm.value);
  }

  // shipping form submit

  submitShippingAddressForm() {
    console.log(this.billingAddressForm.value);
  }

// add new contact person
addNewContactPerson(){
    let personArr = this.contactPersonsForm.get('persons') as FormArray;
    let newContactPerson = this.fb.group({
      salutation: new FormControl(""),
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl(""),
      mobile: new FormControl(""),
    })

    personArr.push(newContactPerson)
}

  // switch through tabs
  switchTabs(tab: tabContent): void {
    this.currentTab = tab;
  }
}
