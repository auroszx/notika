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
	endpointUrl: string;

  	constructor(public http: HttpClient) {
    	this.endpointUrl = 'http://'+ window.location.hostname + ':3000';
    	console.log(this.endpointUrl);
  	}

	getNoteDetail(note_id) {

	    const httpOptions = {
	      headers: new HttpHeaders({
	        //'Authorization': this.token,
	        'Authorization': localStorage.getItem("token"),
	        'Content-Type':'application/json'
	      })
	    };

	    return this.http.get(this.endpointUrl+'/notes/'+note_id, httpOptions);
	}

	updateNote(note_id, note_title, note_content) {

	    const httpOptions = {
	      headers: new HttpHeaders({
	        // 'Authorization': this.token,
	        'Authorization': localStorage.getItem("token"),
	        'Content-Type':'application/json'
	      })
	    };

	    let data = {
	        note_id: note_id,
	        note_title: note_title,
	        note_content: note_content
	    };

	    return this.http.put(this.endpointUrl+'/notes/update', JSON.stringify(data), httpOptions);
	}

	deleteNote(note_id) {

		const httpOptions = {
	      headers: new HttpHeaders({
	        // 'Authorization': this.token,
	        'Authorization': localStorage.getItem("token"),
	        'Content-Type':'application/json'
	      })
	    };

	    return this.http.delete(this.endpointUrl+'/notes/delete/'+note_id, httpOptions);
	}

	createNote(note_title, note_content) {

	    const httpOptions = {
	      headers: new HttpHeaders({
	        // 'Authorization': this.token,
	        'Authorization': localStorage.getItem("token"),
	        'Content-Type':'application/json'
	      })
	    };

	    let data = {
	        note_title: note_title,
	        note_content: note_content
	    };

	    return this.http.post(this.endpointUrl+'/notes/create', JSON.stringify(data), httpOptions);
	}

	getAllNotes() {

		const httpOptions = {
	      headers: new HttpHeaders({
	        // 'Authorization': this.token,
	        'Authorization': localStorage.getItem("token"),
	        'Content-Type':'application/json'
	      })
	    };

	    return this.http.get(this.endpointUrl+'/notes/user', httpOptions);

	}

}
