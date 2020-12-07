import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {ServiceComponent} from './services/services.component';
import {BusinessComponent} from './business/business.component';
import {HoodsComponent} from './hoods/hoods.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [  
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
{path:'user',component:UserDashboardComponent,canActivate:[AuthGuard],
data:{
  role:'ROLE_USER'
}
},
{path:'admin',component:AdminDashboardComponent,canActivate:[AuthGuard],
data:{
  role:'ROLE_ADMIN'
}
},
{ path: 'user/:id', component: ProfileComponent },
{ path: 'business', component: BusinessComponent },
{ path: 'hoods', component: HoodsComponent },
{ path: 'services', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
