import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';

import { AppComponent } from './app.component';
import { gapiClientConfig } from './google-api.config';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        GoogleApiModule.forRoot({
            provide: NG_GAPI_CONFIG,
            useValue: gapiClientConfig
        })
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
