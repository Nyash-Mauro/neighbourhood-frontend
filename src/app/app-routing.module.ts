import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

 const routes: Routes = [  
  //  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
// { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
// { path: 'user/:id', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
