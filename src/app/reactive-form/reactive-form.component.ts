import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent  implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  formData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   this.initializeForm()
  }


  initializeForm(){
   this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false]
    });
  }

  clearForm(){
    this.initializeForm()
  }

  get name():FormControl { return this.userForm.get('name') as FormControl; }
  get email():FormControl { return this.userForm.get('email') as FormControl }

  onSubmit() {
    this.submitted = true;
    this.formData = this.userForm.value;
    console.log('Form submitted:', this.formData);
  }
}