import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { WebService } from '../web.service';

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
  providers: [WebService],
  templateUrl: './child-page.component.html',
  styleUrl: './child-page.component.scss'
})
export class ChildPageComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  employees: Employee[] = []
    @Input() set fetchdata(data:any){
      console.log('**********' + data);
    this.employees = data
  }

  empCount: number = 0

  // Only when @Input() properties change
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('currentValue!', changes['employees'].currentValue);
  //   console.log('previousValue!', changes['employees'].previousValue);
  // }


  // AfterViewInit & AfterViewChecked 
  Chart: any
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private webservice: WebService) { }

  ngOnInit() {
    // rxjs observale passing value here
    this.webservice.subject.next(true)


    console.log('Child page initialized!');
  }


  ButtonClick() {

  }

  ngDoCheck() {
    if (this.employees.length !== this.empCount) {
      console.log('employees count changed!');
      this.empCount = this.employees.length;
    }
  }



  // AfterContentInit & ngAfterContentChecked
  ngAfterContentInit() {
    console.log('** content initialized!');
  }


  ngAfterContentChecked(): void {
    console.log('** content change detected');
  }



  // ngAfterViewInit & ngAfterViewChecked
  // Runs once after Angular initializes the component's view and child views.
  // Ideal for DOM-dependent operations (e.g., chart initialization, focusing an input).

   ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    this.Chart(ctx, {
      type: 'bar',
      data: { /* ... */ },
      options: { /* ... */ }
    });
  }


  // Runs after every change detection cycle that affects the view.
  ngAfterViewChecked(): void {
    console.log('** chart value change detected');
  }

  ngOnDestroy() {
    console.log('Page is about to destroy ');
    // user ab ye page se kahi dusre page pe ja raha hai tab ye call hota hai 
    
  }
}

