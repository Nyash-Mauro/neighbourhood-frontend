import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthGuard } from './guards/auth.guard';
// import { HighlightDirective } from './directives/highlight.directive';
// import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot
  ],
  providers: [
    // AuthGuard,
    // {
    //   provide:HTTP HTTP_INTERCEPTORS,
    //   uesClass:AuthInterceptor,
    //   multi:true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
