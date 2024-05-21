import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AngularMaterialModule } from './AngularMaterialModule';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth-components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule} from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { LoginComponent } from './auth-components/login/login.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';

// Importez HttpClientModule
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    AngularMaterialModule, MatInputModule, BrowserAnimationsModule,
   MatIconModule, CommonModule, MatToolbarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }