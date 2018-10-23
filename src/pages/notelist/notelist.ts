import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'notelist',
  templateUrl: 'notelist.html'
})
export class NoteList {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    
  }

  doToast(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  }

  


}
