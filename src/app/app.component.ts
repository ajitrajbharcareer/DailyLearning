import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { FormarrayComponent } from './formarray/formarray.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormComponent, TemplateDrivenComponent,FormarrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Revamp Team';
}
