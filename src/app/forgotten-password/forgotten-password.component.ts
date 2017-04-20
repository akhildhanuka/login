import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from "../login/login.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'forgotten-password',
  templateUrl: './forgotten-password.html',
})

export class ForgottenPasswordComponent {
  userType:string;
  public email:string;
  error:boolean;
  errorMessage:string;

  constructor(private loginService:LoginService, private route:ActivatedRoute, private translate:TranslateService,
              private elRef:ElementRef) {
    this.userType = this.route.snapshot.queryParams['userType'];
  }

  recover() {
    this.error = false;
    this.errorMessage = '';

    if(this.isValidation(this.email)) {
      this.loginService.recovery(this.email)
        .subscribe(
          (status:any) => {
            if (status.IsError === false) {
              var userEmailId = this.elRef.nativeElement.querySelector('#ppp-recover-email');
              userEmailId.empty().html('<h4 class="thanks-msg">' +  '</h4>')
            } else {
              this.error = true;
              this.translate.get('recover-password.error-email').subscribe((res:string) => {
                this.errorMessage = res;
              });
            }
          });
    } else {
      this.error = true;
      this.translate.get('recover-password.error-email').subscribe((res:string) => {
        this.errorMessage = res;
      });
    }
  }

  private isValidation(email:string) {
    var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var userEmailId = this.elRef.nativeElement.querySelector('#ppp-recover-email');
    if (email === '' || !reg.test(email)) {
      userEmailId.focus();
      return false;
    } else {
      return true;
    }
  }
}
