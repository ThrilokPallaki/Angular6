import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactForm, CONTACTTYPE } from '../shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contacttypes = CONTACTTYPE;

  createForm(): any {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      message: ['', Validators.required],
      contacttype: ['None', Validators.required]
    });
  }

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Feedback:' + JSON.stringify(this.contactForm.value));
    this.contactForm.reset({
      firstName: '',
      lastName: '',
      telnum: 0,
      email: '',
      agree: false,
      message: '',
      contacttype: ''
    });
  }
}
