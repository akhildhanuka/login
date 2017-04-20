import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SSOProvider } from './sso.model';

@Injectable()
export class SSOService {

  constructor() {
  }

  getSSOConfig():SSOProvider[] {

    return [new SSOProvider('Sign in with Google', 'https://sso.3plearning.com/Google',
      '//west.cdn.mathletics.com/html/login/sso-google.png', 'https://accounts.google.com/logout', 'Google'),
      new SSOProvider('Sign in with Office365', 'https://sso.3plearning.com/Office365SSO',
        '//west.cdn.mathletics.com/html/login/sso-office365.png', 'https://login.microsoftonline.com/logout.srf',
        'Office365')
    ];

  }
}
