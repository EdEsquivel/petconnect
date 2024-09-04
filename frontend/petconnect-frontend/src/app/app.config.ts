import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'petconnect1',
        appId: '1:674140294791:web:7256aec0893a77adbc7222',
        storageBucket: 'petconnect1.appspot.com',
        apiKey: 'AIzaSyAiiv4rKyvH9U9En8ASNw_mn2A4sVIPGtk',
        authDomain: 'petconnect1.firebaseapp.com',
        messagingSenderId: '674140294791',
        measurementId: 'G-1XEZGM09DJ',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
