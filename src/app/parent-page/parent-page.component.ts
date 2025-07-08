import { Component, DoCheck, OnInit } from '@angular/core';
import { ChildPageComponent } from '../child-page/child-page.component';
import { FormsModule } from '@angular/forms';
import { WebService } from '../web.service';

// rxjs exmamples

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { CommonModule } from '@angular/common';

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
  imports: [ChildPageComponent, FormsModule,CommonModule],
  providers: [WebService],
  templateUrl: './parent-page.component.html',
  styleUrl: './parent-page.component.scss'
})
export class ParentPageComponent implements OnInit,DoCheck {

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
      department: 'Developer',
      position: '.NET',
      salary: 15,
      joinDate: '2023-01-10'
    }
  ];



  searchString: string = ""
  filteredEmployees = this.employeeList


  constructor(private webService:WebService) { }

  ngOnInit(): void {

    // rxjs observale example
    // rxjs observale getting value here
    this.webService.isLogged.subscribe(data=>{
      console.log('User Logged');
    })

    // first example
    ajax.getJSON('https://reqres.in/api/users?page=2').subscribe({
      next: (data) => console.log('Data received:', data),
      error: (err) => console.error('Error:', err),
    });

    // second exmaple
    const searchBox: any = document.getElementById('search');
    fromEvent(searchBox, 'input').pipe(
      map((e: any) => e.target.value), // Extract input value
      debounceTime(500),               // Wait for 500ms pause
      distinctUntilChanged()           // Ignore if unchanged
    ).subscribe((value) => {
      console.log('Search query:', value);
    });

  }







  // searching the value
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

  // it calls frequently -  Detect changes Angular misses
  ngDoCheck(){
      console.log('filteredEmployees changed:', this.filteredEmployees);
      console.log('searchString changed:', this.searchString);
  }



  
}
