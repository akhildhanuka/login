import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SSOService } from './sso.service';
import { SSOProvider } from './sso.model';

@Component({
  selector: 'sso-box',
  providers: [SSOService],
  templateUrl: './sso.component.html',
})

export class SSOComponent implements OnInit {

  public sso:SSOProvider[];
  public userType:string;

  constructor(private ssoService:SSOService, private route:ActivatedRoute) {
    this.userType = this.route.snapshot.params['userType'];
  }

  ngOnInit() {
    this.sso = this.ssoService.getSSOConfig();

  }

}
