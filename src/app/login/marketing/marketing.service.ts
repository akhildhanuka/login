import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Banners } from './marketing.model';
import {ConfigService} from "../../config/config.service";
let userType:string;

@Injectable()
export class MarketingService {
  private bannerUrl:string = '';

  constructor(private http:Http, configService:ConfigService) {
    this.bannerUrl = configService.getConfig().MarketingBanners;
  }

  get(type:string):Observable<Banners[]> {
    userType = type;
    let banners$ = this.http
      .get(`${this.bannerUrl}`)
      .map(mapBanners);
    return banners$;
  }
}


function mapBanners(response:Response):Banners[] {
  return [response.json()].map(toMarketingBanners)
}

function toMarketingBanners(r:any):Banners {

  let type = (r[userType]);
  let banners = <Banners>({
    bannerImages: type.banners,
    marketingTexts: type['marketing-texts']
  });
  return banners;
}
