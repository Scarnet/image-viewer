import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ImageDisplayComponent } from './app/image-display/image-display.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'display', pathMatch: 'full' },
      { path: 'display', component: ImageDisplayComponent }
    ]),
    provideHttpClient(),
    importProvidersFrom(CommonModule, MatCardModule),
    DatePipe 
  ]
}).catch(err => console.error(err));
