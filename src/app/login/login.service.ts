import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http:Http) {
  }

  login(username:string, password:string, productId:number) {
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('http://mzaue2.phoenix.mathletics.com/AuthenticationService-R165/AuthenticationService.asmx/FastLoginJ'
      , {
        request: {
          Username: username,
          Password: password,
          ProductID: productId
        }
      }, {headers: headers})
      .map((response:Response) => {
        return response.json().d;
      });
  }

  recovery(email:string) {
    console.log(email);
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('http://community.mathletics.com/RecoverDetails.aspx/RetrieveForgottenPassword'
      , {
        emailAddress: email
      }, {headers: headers})
      .map((response:Response) => {
        return response.json().d;
      });
  }
}
