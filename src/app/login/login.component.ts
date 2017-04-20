import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from "./login.service";

@Component({
  selector: 'login',
  templateUrl: './login.html',
})

export class LoginComponent {

  constructor(route:ActivatedRoute, loginService:LoginService) {
    //console.log(route.snapshot.params['userType']);
  }

}
