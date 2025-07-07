import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParentPageComponent } from "./parent-page/parent-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Revamp Team';
}
