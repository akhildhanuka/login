import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ConfigService} from "../../config/config.service";
import {Response} from "@angular/http";
import {ConfigModel} from "../../config/config.model";
import {TranslateService} from '@ngx-translate/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.html',
})

export class LoginFormComponent {

  public config:ConfigModel;
  public username:string;
  public password:string;
  public token:string;
  public errorMessage:string;
  public termsAgreed:boolean;
  public error:boolean;

  constructor(@Inject("windowObject") window:Window, configService:ConfigService,
              private translate:TranslateService, private loginService:LoginService, private route:ActivatedRoute) {
    this.config = configService.getConfig();
    this.termsAgreed = false;
  }

  login() {
    this.error = false;
    this.errorMessage = '';
    if (!this.termsAgreed) {
      this.loginService.login(this.username, this.password, 1)
        .subscribe(
          (authData:any) => {
            if(authData.IsError) {
              this.translate.get('login.error-auth-credentials').subscribe((res:string) => {
                this.errorMessage = res;
              });
            }

            this.token = decodeURIComponent(authData.AuthToken);
            var url = this.config.ProductUrl + '?userToken=' + this.token;
            if (this.route.snapshot.queryParams['lang']) {
              url += '&lang=' + this.route.snapshot.queryParams['lang'];
            }
            //window.location.href = url;
          },
          (error) => {
            this.translate.get('login.error-auth-credentials').subscribe((res:string) => {
              this.errorMessage = res;
            });
          }
        );
    } else {
      this.error = true;
      this.translate.get('login.error-terms').subscribe((res:string) => {
        this.errorMessage = res;
      });

    }
  }
}
