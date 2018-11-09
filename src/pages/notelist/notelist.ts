import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NoteCreation } from '../notecreation/notecreation';
import { NoteDetail } from '../notedetail/notedetail';
import { WelcomePage } from '../welcome/welcome';
import { NotesProvider } from '../../providers/notes/notes';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'notelist',
  templateUrl: 'notelist.html'
})
export class NoteList {

  notelist: any;
  response: any;
  fullname: string;

  constructor(public navCtrl: NavController, private notes: NotesProvider, private toastCtrl: ToastController, private user: UserProvider) {
    this.user.getUserData().subscribe(res => {
      this.response = res;
      this.fullname = this.response[0].user_fullname;

      this.notes.getAllNotes().subscribe(res => {
        this.response = res;
        this.notelist = this.response;
      });
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
