import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ToastController } from 'ionic-angular';
import { NoteList } from '../notelist/notelist';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  loggedIn = false;
  username: String;
  fullname: String;
  email: String;
  password: String;
  response: any;
  signup: Boolean = false;
  endpoint: string = localStorage.getItem("endpoint");

  constructor(public navCtrl: NavController, public user: UserProvider, private toastCtrl: ToastController) {
  	//Check if user was previously logged in.
  	if (localStorage.getItem("token")) {
  		console.log("Already logged in.");
      this.navCtrl.setRoot(NoteList);
  	}
  	else {
  		console.log("Not logged in yet.");
  	}

  }

  doToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  doLogin() {
    this.user.login(this.username, this.password).subscribe(res => {
      console.log(res);
      this.response = res;
      localStorage.setItem("token", this.response.token);
      if (this.response.status >= 400) {
        this.doToast(this.response.message);
      }
      if (this.response.status == 200) {
        this.navCtrl.setRoot(NoteList);
      }
    });

  }

  doSignup() {
    this.user.signup(this.username, this.fullname, this.email, this.password).subscribe(res => {
      console.log(res);
      this.response = res;
      if (this.response.status >= 400) {
        this.doToast(this.response.message);
      }
      else {
        this.doLogin();
      }
    });
  }

  toggleView() {
    this.signup = !this.signup;
  }

  setEndpoint() {
    localStorage.setItem("endpoint", this.endpoint);
  }


}
