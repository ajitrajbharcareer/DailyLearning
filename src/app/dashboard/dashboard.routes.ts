// app.routes.ts (or app.module.ts if using NgModule)
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../auth.guard';
import { ProfileComponent } from '../profile/profile.component';
import { SettingComponent } from '../setting/setting.component';
import { UnsavedQuizGuard } from '../unsaved-quiz.guard';

export const routes: Routes = [
  {
    path: '',  // This is your root path
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent, canDeactivate: [UnsavedQuizGuard] }, // /profile
      { path: 'profile/:id', component: ProfileComponent }, // /profile/123
      { path: 'profileUpdate/:id', component: ProfileComponent, canActivate: [AuthGuard] }, // 
      { path: 'settings', component: SettingComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' } // Default child
    ]
  }
];