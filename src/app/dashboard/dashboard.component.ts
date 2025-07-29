import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router:Router,private route:ActivatedRoute){}

  navigateToProfilePage(){
    
    // strict route - profile/:id
  // this.router.navigate(['profile', '2qeqeqw'], { relativeTo: this.route });
    // using queryparams  - not strict route
   this.router.navigate(['/dashboard/profile'],{queryParams : { id : '2qeqeqw'}})
  }
}
