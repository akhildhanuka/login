import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ConfigModel } from './config.model';


const configuration:any =
{
  "GlobalMathleticsWebsiteUrl": "http://www.mathletics.com",
  "ProductUrl": "http://community.mathletics.com/",
  "Shared.AuthenticationServicePathUrl": "http://mzaue2.phoenix.mathletics.com/AuthenticationService-R163/",
  "TermsAndCondition": "http://www.3plearning.com/terms-conditions/",
  "SSOProviders": "http://west.cdn.mathletics.com/html/login/ssoSettings.json",
  "MarketingBanners": "http://west.cdn.mathletics.com/html/marketing/marketingBanners_v1.json",
  "RecoverPasswordUri": "http://community.mathletics.com/RecoverDetails.aspx/RetrieveForgottenPassword",
  "ContactUs": "http://www.mathletics.com/contact"
};

@Injectable()
export class ConfigService {

  constructor() {
  }

  getConfig():ConfigModel {
    return new ConfigModel(configuration);
  }
}
