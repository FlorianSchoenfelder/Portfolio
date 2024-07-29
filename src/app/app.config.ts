import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

/**
 * Application configuration object for setting up Angular providers.
 * 
 * This configuration object provides the necessary Angular services and modules needed for the application.
 * It includes:
 * 
 * - `provideRouter`: Configures the Angular Router with the specified routes.
 * - `provideClientHydration`: Ensures proper hydration of the client-side application.
 * - `provideHttpClient`: Sets up the HTTP client service for making HTTP requests.
 * - `TranslateModule.forRoot`: Configures the translation module with the default language and translation loader.
 * 
 * Translation Module Configuration:
 * - `defaultLanguage`: Sets the default language to 'de' (German).
 * - `loader`: Provides the `TranslateLoader` with a factory function `HttpLoaderFactory` and its dependency `HttpClient`.
 * 
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(),
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!]
};
