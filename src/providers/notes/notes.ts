import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {

	token: string = undefined;

  	constructor(public http: HttpClient) {
    	this.token = localStorage.getItem("token");
  	}

	getNoteDetail(note_id) {

	    const httpOptions = {
	      headers: new HttpHeaders({
	        'Authorization': this.token,
	        'Content-Type':'application/json'
	      })
	    };

	    return this.http.get('http://localhost:3000/notes/'+note_id, httpOptions);
	}

	updateNote(note_id, note_title, note_content) {

	    const httpOptions = {
	      headers: new HttpHeaders({
	        'Authorization': this.token,
	        'Content-Type':'application/json'
	      })
	    };

	    let data = {
	        note_id: note_id,
	        note_title: note_title,
	        note_content: note_content
	    };

	    return this.http.put('http://localhost:3000/notes/update', JSON.stringify(data), httpOptions);
	}

	deleteNote(note_id) {

		const httpOptions = {
	      headers: new HttpHeaders({
	        'Authorization': this.token,
	        'Content-Type':'application/json'
	      })
	    };

	    return this.http.delete('http://localhost:3000/notes/delete/'+note_id, httpOptions);
	}

}
