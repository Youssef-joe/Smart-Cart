/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app-routing';
import { provideHttpClient } from '@angular/common/http';

// Merge the appConfig with the routing providers
const mergedConfig = {
  ...appConfig, // Keep the existing appConfig
  providers: [
    ...(appConfig.providers || []), // Include any existing providers in appConfig
    ...appRoutingProviders, // Add the routing providers
    provideHttpClient() // Enable HttpClient globally
  ],
};

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));

