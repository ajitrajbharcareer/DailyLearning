import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  id: any = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  this.id = this.route.snapshot.paramMap.get('id');
  console.log('Profile ID:', this.id);
  
  if (this.id) {
    this.loadUserData(this.id);
  }
    

    this.route.queryParamMap.subscribe(params => {
    console.log({params : params});
    this.loadUserData(this.id); // Fetch data when ID changes
  });
  }

  loadUserData(id:string){
    // API CALL
  }

}
