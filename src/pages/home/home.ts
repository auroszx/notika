import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public user: UserProvider) {

  	//Check if user was previously logged in.
  	if (localStorage.getItem("loggedIn") == "true") {
  		console.log("Already logged in.");
  	}
  	else {
  		console.log("Not logged in yet.");
  	}

  	console.log(this.user.doStuff());
  }

}
