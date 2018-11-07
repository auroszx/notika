import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    //Initialization?
  }

  login(username, password) {

    const httpOptions = {
      headers: new HttpHeaders({
        //Authorization: token,
        'Content-Type':'application/json'
      })
    };

    let data = {
        username: username,
        password: password
    };

    return this.http.post(localStorage.getItem("endpoint")+'/user/login', JSON.stringify(data), httpOptions);
  }

  signup(username, fullname, email,password) {

    const httpOptions = {
      headers: new HttpHeaders({
        //Authorization: token,
        'Content-Type':'application/json'
      })
    };

    let data = {
        username: username,
        fullname: fullname,
        email: email,
        password: password
    };

    return this.http.post(localStorage.getItem("endpoint")+'/user/create', JSON.stringify(data), httpOptions);
  }


}
