import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleTagManagerModule } from './angular-google-tag-manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-N42QKMT',
      // gtm_auth: YOUR_GTM_AUTH,
      // gtm_preview: YOUR_GTM_ENV
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
