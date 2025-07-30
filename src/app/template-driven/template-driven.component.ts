import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  user = {
    name: '',
    email: '',
    subscribe:false
  };
  
  nameError = false;
  emailError = false;
  submittedData: any = null;

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.emailError = !emailRegex.test(this.user.email);
  }

  onSubmit() {
    // Simple validation
    this.nameError = this.user.name.trim() === '';
    this.validateEmail();
    
    if (!this.nameError && !this.emailError) {
      this.submittedData = {...this.user};
      console.log('Form submitted:', this.submittedData);
    }
  }
}
