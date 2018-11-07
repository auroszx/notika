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
  note_title: String;
  note_content: String;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private notes: NotesProvider) {

  }

  doToast(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  }

  createNote() {
    this.notes.createNote(this.note_title, this.note_content).subscribe(res => {
      this.navCtrl.pop();
    });
  }


}
