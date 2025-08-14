import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  id: any = ""
  hasUnsubmittedAttempts = false;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Profile ID:', this.id);

    if (this.id) {
      this.loadUserData(this.id);
    }


    this.route.queryParamMap.subscribe(params => {
      console.log({ params: params });
      this.loadUserData(this.id); // Fetch data when ID changes
    });
  }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasUnsubmittedAttempts) {
      // Show confirmation dialog
      return confirm(
        'You have unsubmitted quiz attempts. Are you sure you want to leave? ' +
        'Your progress will be lost.'
      );
    }
    return true;
  }

   onQuestionAttempted() {
    this.hasUnsubmittedAttempts = true;
  }


    onSubmitQuiz() {
    this.hasUnsubmittedAttempts = false;
  }

  loadUserData(id: string) {
    // API CALL
  }
  goBack(){
    this.router.navigate(['/settings'])
  }

}
