import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';

@Component({
  selector: 'notedetail',
  templateUrl: 'notedetail.html'
})
export class NoteDetail {

  editing: Boolean = false;
  response: any;
  note_title: String;
  note_content: String;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private notes: NotesProvider, private navParams: NavParams) {
    this.notes.getNoteDetail(this.navParams.get('note_id')).subscribe(res => {
      this.response = res;
      this.note_title = this.response[0].note_title;
      this.note_content = this.response[0].note_content;
    });
  }

  doToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  deleteNote() {
    this.notes.deleteNote(this.navParams.get('note_id')).subscribe(res => {
      this.navCtrl.pop();
    });
  }

  editNote() {
    this.notes.updateNote(this.navParams.get('note_id'), this.note_title, this.note_content).subscribe(res => {
      this.toggleEdit();
    });
  }



  


}
