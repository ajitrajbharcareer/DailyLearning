import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
}

@Component({
  selector: 'app-child-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-page.component.html',
  styleUrl: './child-page.component.scss'
})
export class ChildPageComponent {
  @Input() employees: Employee[] = []
  empCount:number = 0

  ngOnChanges(changes:SimpleChanges){
    console.log('currentValue!', changes['employees'].currentValue);
    console.log('previousValue!', changes['employees'].previousValue);
  }
  
  ngOnInit(){
    console.log('Child page initialized!');
  }

  ngDoCheck() {
    if (this.employees.length !== this.empCount) {
      console.log('employees count changed!');
      this.empCount = this.employees.length;
    }
}
}
