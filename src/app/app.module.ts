import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HighlightDirective } from './directives/hightlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { BusinessComponent } from './business/business.component';
import { ServiceComponent } from './services/services.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HoodsComponent } from './hoods/hoods.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightDirective,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
    AdminDashboardComponent,
    PostsComponent,
    BusinessComponent,
    ServiceComponent,
    UserDashboardComponent,
    AdminNavbarComponent,
    HoodsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
