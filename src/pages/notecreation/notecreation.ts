import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { NavParams } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';

@Component({
  selector: 'notecreation',
  templateUrl: 'notecreation.html'
})
export class NoteCreation {

  response: any;
  note_title: String = "";
  note_content: String = "";

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private notes: NotesProvider) {

  }

  doToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  createNote() {
    this.notes.createNote(this.note_title, this.note_content).subscribe(res => {
      if (this.response.status >= 400) {
        this.doToast(this.response.message);
      }
      if (this.response.status == 200) {
        this.navCtrl.pop();
      }
    });
  }


}
