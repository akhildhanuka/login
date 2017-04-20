import { Component,OnInit } from '@angular/core';
import { MarketingService } from './marketing.service';
import { Banners } from './marketing.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'marketing-box',
  providers: [MarketingService],
  templateUrl: './marketing.component.html',
})

export class MarketingComponent implements OnInit {

  marketingTexts:any;
  bannerImages:string;
  public userType:string;

  constructor(private marketingService:MarketingService, private route:ActivatedRoute) {
    this.userType = this.route.snapshot.params['userType'];
  }

  ngOnInit() {
    this.marketingService
      .get(this.userType)
      .subscribe(bannerList => {
        this.marketingTexts = bannerList[0].marketingTexts;
        this.bannerImages = bannerList[0].bannerImages;

      });
  }

}
