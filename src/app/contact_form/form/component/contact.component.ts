import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../popup/component/popup.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PopupComponent],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isContactFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      body: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(evt: SubmitEvent) {
    evt.preventDefault();

    const formData = this.contactForm.value;
    // This is important. We need to add the hidden field to make sure Netlify picks up the form submission.
    formData['contactForm'] = 'contactForm';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.isContactFormSubmitted = true;
      });
  }

  // functions used in the html template
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get body() {
    return this.contactForm.get('body');
  }
}
