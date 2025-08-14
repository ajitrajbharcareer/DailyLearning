import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

interface UserData {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userData$!: Observable<UserData>;
  userData: UserData | null = null;
  lastUpdated: Date;
  id: number = 0
  constructor() {
    this.lastUpdated = new Date();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Simulate API call with delay
    this.id = this.id + 1
    this.userData$ = of({
      id: this.id,
      name: 'John Doe',
      email: 'john.doe@example.com'
    })
    this.userData = {
      id: this.id,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
    this.lastUpdated = new Date();

  }

  refreshData(): void {
    this.loadData();
  }
}
