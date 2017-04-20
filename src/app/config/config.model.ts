export class ConfigModel {
  public GlobalMathleticsWebsiteUrl:string;
  public ProductUrl:string;
  public AuthenticationServicePathUrl:string;
  public TermsAndCondition:string;
  public SSOProviders:string;
  public MarketingBanners:string;
  public RecoverPasswordUri:string;
  public ContactUs:string;

  constructor(config:any) {

    for (var key in config) {
      if (config.hasOwnProperty(key)) {
        this[key] = config[key];
      }
    }

  }
}
