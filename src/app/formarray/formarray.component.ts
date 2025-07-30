import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-formarray',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formarray.component.html',
  styleUrl: './formarray.component.scss'
})
export class FormarrayComponent {
  companyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      companyAddress: [''],
      employees: this.fb.array([])
    });

    // Add one employee by default
    this.addEmployee();
  }

  get employees(): FormArray {
    return this.companyForm.get('employees') as FormArray;
  }

  createEmployee(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.min(1000)]],
      isFullTime: [true]
    });
  }

  addEmployee(): void {
    this.employees.push(this.createEmployee());
  }

  removeEmployee(index: number): void {
    this.employees.removeAt(index);
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      console.log('Form submitted:', this.companyForm.value);
    } else {
      this.markFormGroupTouched(this.companyForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }
}