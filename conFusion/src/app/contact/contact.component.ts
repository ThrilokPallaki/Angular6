import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactForm, CONTACTTYPE } from '../shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('cForm') cf;
  public contactForm: FormGroup;
  contacttypes = CONTACTTYPE;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };
  validationMessages = {
    'firstname': {
      'required': 'FirstName is required',
      'minlength': 'FirstName must be at least 2 characters long',
      'maxlength': 'firstName must be less than 25 characters',
    },
    'lastname': {
      'required': 'LastName is required',
      'minlength': 'LastName must be at least 2 characters long',
      'maxlength': 'LastName must be less than 25 characters',
    },
    'telnum': {
      'required': 'Tel. Number is required',
      'pattern': 'Please enter a valid number'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Please enter a valid email'
    }
  };

  createForm(): any {
    this.contactForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      telnum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      agree: new FormControl(false),
      contacttype: new FormControl('None', [Validators.required]),
      message: new FormControl('', Validators.required)
    });

    this.contactForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  onValueChanged(data?: any): any {
    const form = this.contactForm;
    if (!this.contactForm) { return; }
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous messages if any
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && control.invalid && control.touched) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] += ' ';
              break;
            }
          }
        }
      }
    }
  }

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Feedback:' + JSON.stringify(this.contactForm.value));
    this.cf.resetForm({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    // this.contactForm.reset({
    //   firstname: '',
    //   lastname: '',
    //   telnum: '',
    //   email: '',
    //   agree: false,
    //   contacttype: 'None',
    //   message: ''
    // });
  }
}
