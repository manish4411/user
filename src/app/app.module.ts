import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CameraComponent } from './camera/camera.component';
import { ReportingComponent } from './reporting/reporting.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavHeadComponent } from './nav-head/nav-head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CameraComponent,
    ReportingComponent,
    SettingComponent,
    LoginComponent,
    NavHeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
