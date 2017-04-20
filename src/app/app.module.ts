import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import { MarketingComponent } from './login/marketing/marketing.component';
import { LoginFormComponent } from './login/form/login.form.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { LoginComponent } from './login/login.component';
import { SSOComponent } from './login/sso/sso.component';
import { ConfigService } from './config/config.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import * as WebFont from 'webfontloader';
import {AppRoutingModule} from "./app-routing.module";
import {LoginService} from "./login/login.service";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "./src/app/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MarketingComponent,
    LoginComponent,
    LoginFormComponent,
    ForgottenPasswordComponent,
    SSOComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [ConfigService, LoginService,    { provide: "windowObject", useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
