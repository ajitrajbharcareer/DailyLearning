import { Component } from '@angular/core';
import { ChildPageComponent } from '../child-page/child-page.component';
import { FormsModule } from '@angular/forms';

export interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
}

@Component({
  selector: 'app-parent-page',
  standalone: true,
  imports: [ChildPageComponent, FormsModule],
  templateUrl: './parent-page.component.html',
  styleUrl: './parent-page.component.scss'
})
export class ParentPageComponent {

  employeeList: Employee[] = [
    {
      id: 1,
      name: 'Emran',
      department: 'Developer',
      position: 'Fullstack Developer',
      salary: 28,
      joinDate: '2020-05-15'
    },
    {
      id: 2,
      name: 'Ajit',
      department: 'Developer',
      position: 'Angular Developer',
      salary: 25,
      joinDate: '2019-03-10'
    },
    {
      id: 3,
      name: 'Jeeshan',
      department: 'Developer',
      position: 'Angular Developer',
      salary: 24,
      joinDate: '2021-01-20'
    },
    {
      id: 4,
      name: 'Atul',
      department: 'Developer',
      position: '.NET Developer',
      salary: 26,
      joinDate: '2020-11-05'
    },
    {
      id: 5,
      name: 'Rashmita',
      department: 'Developer',
      position: 'Fullstack Developer',
      salary: 29,
      joinDate: '2022-02-18'
    },
    {
      id: 6,
      name: 'Pavan',
      department: 'Customer service',
      position: '',
      salary: 15,
      joinDate: '2023-01-10'
    }
  ];

  otherEmployess = [
    {
      id: 1,
      name: 'John Doe',
      department: 'Developer',
      position: 'Software Developer',
      salary: 75000,
      joinDate: '2020-05-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Marketing',
      position: 'Marketing Manager',
      salary: 85000,
      joinDate: '2019-03-10'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      department: 'HR',
      position: 'HR Specialist',
      salary: 65000,
      joinDate: '2021-01-20'
    }
  ];

  searchString: string = ""
  filteredEmployees = this.employeeList


  searchEmployees() {
    if (!this.searchString || this.searchString.trim() === '') {
      this.filteredEmployees = [...this.employeeList];
      return;
    }
  
    const searchTerm = this.searchString.trim().toLowerCase();
    
    this.filteredEmployees = this.employeeList.filter(employee => 
      employee.name.toLowerCase().includes(searchTerm)
    );
  }
}
