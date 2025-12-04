import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),                              // Provide the router with your routes
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Use hash-based routing
    provideClientHydration()                            // Client hydration if you need it
  ]
};
