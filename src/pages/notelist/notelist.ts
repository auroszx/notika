import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NoteCreation } from '../notecreation/notecreation';
import { NoteDetail } from '../notedetail/notedetail';
import { WelcomePage } from '../welcome/welcome';
import { NotesProvider } from '../../providers/notes/notes';

@Component({
  selector: 'notelist',
  templateUrl: 'notelist.html'
})
export class NoteList {

  notelist: any;
  response: any;

  constructor(public navCtrl: NavController, private notes: NotesProvider, private toastCtrl: ToastController) {
    this.notes.getAllNotes().subscribe(res => {
      this.response = res;
      this.notelist = this.response;
    });
  }

  doToast(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  }

  ionViewWillEnter(){
    this.getNotes();
  }


  createNote() {
    this.navCtrl.push(NoteCreation);
  }

  editNote(note_id) {
    this.navCtrl.push(NoteDetail, { note_id: note_id });
  }

  logout() {
    localStorage.removeItem("token");
    this.navCtrl.setRoot(WelcomePage)
  }

  getNotes() {
    this.notes.getAllNotes().subscribe(res => {
      this.response = res;
      this.notelist = this.response;
    });
  }

  deleteNote(note_id) {
    this.notes.deleteNote(note_id).subscribe(res => {
      this.getNotes();
    });
  }


}
