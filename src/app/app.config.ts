import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common'; // Import the Base HREF token
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

/**
 * Defines the main application configuration.
 * FIX: Reverted to default PathLocationStrategy for clean local URLs.
 * NEW FIX: Added APP_BASE_HREF provider to specify the base path for routing 
 * when the application is hosted in a subdirectory (like on GitHub Pages).
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Provide routing configuration
    provideRouter(
      routes 
    ),
    // CRITICAL FIX FOR GITHUB PAGES SUBDIRECTORY DEPLOYMENT:
    // Sets the base HREF for the Angular Router, telling it that all internal links 
    // must be prefixed with the repository name (/techthor-polyglot-portal/). 
    // This prevents internal links from jumping back to the root of github.io/.
    { provide: APP_BASE_HREF, useValue: '/techthor-polyglot-portal/' },
    provideClientHydration()
  ]
};