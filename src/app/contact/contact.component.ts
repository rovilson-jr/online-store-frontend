import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formContact = this.fb.group({
    name: ["", [
      Validators.minLength(3),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(5),
      Validators.required
    ]],
    telephone: ["", [
      Validators.minLength(8),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  sendForm() {
    alert("The message has been sent!");
    this.formContact.reset();
  }

}
