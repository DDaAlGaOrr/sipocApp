import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzMessageModule } from 'ng-zorro-antd/message';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NzMessageModule,
    BrowserModule,
    FormsModule,
    MbscModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'sipocfiles',
        appId: '1:289234967814:web:91bd7f6f5a092beb291287',
        storageBucket: 'sipocfiles.appspot.com',
        apiKey: 'AIzaSyBoVTjz9LLYN6mbTkcggcTaBEw144IbBJM',
        authDomain: 'sipocfiles.firebaseapp.com',
        messagingSenderId: '289234967814',
      })
    ),
    provideStorage(() => getStorage()),
  ],
  providers: [
    HttpClientModule,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
