webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notelist_notelist__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.loggedIn = false;
        this.signup = false;
        this.endpoint = localStorage.getItem("endpoint");
        //Check if user was previously logged in.
        if (localStorage.getItem("token")) {
            console.log("Already logged in.");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__notelist_notelist__["a" /* NoteList */]);
        }
        else {
            console.log("Not logged in yet.");
        }
    }
    WelcomePage.prototype.doToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
    };
    WelcomePage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.username, this.password).subscribe(function (res) {
            console.log(res);
            _this.response = res;
            localStorage.setItem("token", _this.response.token);
            if (_this.response.status >= 400) {
                _this.doToast(_this.response.message);
            }
            if (_this.response.status == 200) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__notelist_notelist__["a" /* NoteList */]);
            }
        });
    };
    WelcomePage.prototype.doSignup = function () {
        var _this = this;
        this.user.signup(this.username, this.fullname, this.email, this.password).subscribe(function (res) {
            console.log(res);
            _this.response = res;
            if (_this.response.status >= 400) {
                _this.doToast(_this.response.message);
            }
            else {
                // alert("All good");
            }
        });
    };
    WelcomePage.prototype.toggleView = function () {
        this.signup = !this.signup;
    };
    WelcomePage.prototype.setEndpoint = function () {
        localStorage.setItem("endpoint", this.endpoint);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'welcome',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notikha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Welcome to Notikha! Please login or create an account.\n\n  	<ion-list>\n  		<ion-item>\n    		<ion-label color="primary">Username</ion-label>\n    		<ion-input placeholder="Username" type="text" [(ngModel)]="username"></ion-input>\n  		</ion-item>\n      <ion-item *ngIf="signup">\n        <ion-label color="primary">Full name</ion-label>\n        <ion-input placeholder="E.g.: John Doe" type="text" [(ngModel)]="fullname"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signup">\n        <ion-label color="primary">Email</ion-label>\n        <ion-input placeholder="E.g.: john.doe@example.com" type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n  		<ion-item>\n			<ion-label color="primary">Password</ion-label>\n    		<ion-input placeholder="Password" type="password" [(ngModel)]="password"></ion-input>\n  		</ion-item>\n  	</ion-list>\n\n  <button ion-button color="primary" (click)="doLogin()" *ngIf="!signup">\n    Login\n  </button>\n\n  <button ion-button color="primary" (click)="doSignup()" *ngIf="signup">\n    Signup\n  </button>\n\n  <a (click)="toggleView()" id="signuplink" *ngIf="!signup">I don\'t have an account</a>\n  <a (click)="toggleView()" id="loginlink" *ngIf="signup">I have an account</a>\n\n  <ion-input placeholder="Endpoint URL" type="text" [(ngModel)]="endpoint" (change)="setEndpoint()" style="position: absolute; bottom: 0;"></ion-input>\n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        //Initialization?
    }
    UserProvider.prototype.login = function (username, password) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                //Authorization: token,
                'Content-Type': 'application/json'
            })
        };
        var data = {
            username: username,
            password: password
        };
        return this.http.post(localStorage.getItem("endpoint") + '/user/login', JSON.stringify(data), httpOptions);
    };
    UserProvider.prototype.signup = function (username, fullname, email, password) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                //Authorization: token,
                'Content-Type': 'application/json'
            })
        };
        var data = {
            username: username,
            fullname: fullname,
            email: email,
            password: password
        };
        return this.http.post(localStorage.getItem("endpoint") + '/user/create', JSON.stringify(data), httpOptions);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notecreation_notecreation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notedetail_notedetail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NoteList = /** @class */ (function () {
    function NoteList(navCtrl, notes, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.notes = notes;
        this.toastCtrl = toastCtrl;
        this.notes.getAllNotes().subscribe(function (res) {
            _this.response = res;
            _this.notelist = _this.response;
        });
    }
    NoteList.prototype.doToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
    };
    NoteList.prototype.ionViewWillEnter = function () {
        this.getNotes();
    };
    NoteList.prototype.createNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notecreation_notecreation__["a" /* NoteCreation */]);
    };
    NoteList.prototype.editNote = function (note_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notedetail_notedetail__["a" /* NoteDetail */], { note_id: note_id });
    };
    NoteList.prototype.logout = function () {
        localStorage.removeItem("token");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
    };
    NoteList.prototype.getNotes = function () {
        var _this = this;
        this.notes.getAllNotes().subscribe(function (res) {
            _this.response = res;
            _this.notelist = _this.response;
        });
    };
    NoteList.prototype.deleteNote = function (note_id) {
        var _this = this;
        this.notes.deleteNote(note_id).subscribe(function (res) {
            _this.getNotes();
        });
    };
    NoteList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notelist',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/notelist/notelist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Notes\n    </ion-title>\n    <ion-buttons end>\n	    <button ion-button icon-only (click)="getNotes()">\n	    	<ion-icon name="refresh"></ion-icon>\n	    </button>\n	    <button ion-button icon-only (click)="createNote()">\n	    	<ion-icon name="add"></ion-icon>\n	    </button>\n	    <button ion-button icon-only (click)="logout()">\n	    	<ion-icon name="arrow-back"></ion-icon>\n	    </button>\n	</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let note of notelist">\n  		<ion-item (click)="editNote(note.note_id)">\n    		<p><strong>{{note.note_title}}</strong></p>\n    		<p>{{note.note_content}}</p>\n  		</ion-item>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="deleteNote(note.note_id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-buttons>\n  	</ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/notelist/notelist.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__["a" /* NotesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_notes_notes__["a" /* NotesProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _c || Object])
    ], NoteList);
    return NoteList;
    var _a, _b, _c;
}());

//# sourceMappingURL=notelist.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteCreation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { NavParams } from 'ionic-angular';

var NoteCreation = /** @class */ (function () {
    function NoteCreation(navCtrl, toastCtrl, notes) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.notes = notes;
    }
    NoteCreation.prototype.doToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
    };
    NoteCreation.prototype.createNote = function () {
        var _this = this;
        this.notes.createNote(this.note_title, this.note_content).subscribe(function (res) {
            _this.navCtrl.pop();
        });
    };
    NoteCreation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notecreation',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/notecreation/notecreation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      New note\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createNote()">\n	    <ion-icon name="checkmark"></ion-icon>\n	  </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  \n  <ion-input placeholder="Note title (required)" type="text" [(ngModel)]="note_title"></ion-input>\n\n  <ion-textarea placeholder="Your note content goes here" [(ngModel)]="note_content"></ion-textarea>\n\n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/notecreation/notecreation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__["a" /* NotesProvider */]])
    ], NoteCreation);
    return NoteCreation;
}());

//# sourceMappingURL=notecreation.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoteDetail = /** @class */ (function () {
    function NoteDetail(navCtrl, toastCtrl, notes, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.notes = notes;
        this.navParams = navParams;
        this.editing = false;
        this.notes.getNoteDetail(this.navParams.get('note_id')).subscribe(function (res) {
            _this.response = res;
            _this.note_title = _this.response[0].note_title;
            _this.note_content = _this.response[0].note_content;
        });
    }
    NoteDetail.prototype.doToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
    };
    NoteDetail.prototype.toggleEdit = function () {
        this.editing = !this.editing;
    };
    NoteDetail.prototype.deleteNote = function () {
        var _this = this;
        this.notes.deleteNote(this.navParams.get('note_id')).subscribe(function (res) {
            _this.navCtrl.pop();
        });
    };
    NoteDetail.prototype.editNote = function () {
        var _this = this;
        this.notes.updateNote(this.navParams.get('note_id'), this.note_title, this.note_content).subscribe(function (res) {
            _this.toggleEdit();
        });
    };
    NoteDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notedetail',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/notedetail/notedetail.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title *ngIf="!editing">\n      {{note_title}}\n    </ion-title>\n    <ion-title *ngIf="editing">\n      Edit note\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toggleEdit()" *ngIf="!editing">\n        <ion-icon name="create"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="deleteNote()" *ngIf="!editing">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="editNote()" *ngIf="editing">\n  	    <ion-icon name="checkmark"></ion-icon>\n  	  </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <p *ngIf="!editing">{{note_content}}</p>\n\n  \n  <ion-input placeholder="Note title (required)" type="text" [(ngModel)]="note_title" *ngIf="editing"></ion-input>\n\n  <ion-textarea placeholder="Your note content goes here" [(ngModel)]="note_content" *ngIf="editing"></ion-textarea>\n\n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/notedetail/notedetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__["a" /* NotesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], NoteDetail);
    return NoteDetail;
}());

//# sourceMappingURL=notedetail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notelist_notelist__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notedetail_notedetail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notecreation_notecreation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_notes_notes__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notelist_notelist__["a" /* NoteList */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notedetail_notedetail__["a" /* NoteDetail */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notecreation_notecreation__["a" /* NoteCreation */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notelist_notelist__["a" /* NoteList */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notedetail_notedetail__["a" /* NoteDetail */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notecreation_notecreation__["a" /* NoteCreation */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_notes_notes__["a" /* NotesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            splashScreen.show();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotesProvider = /** @class */ (function () {
    function NotesProvider(http) {
        this.http = http;
        this.token = undefined;
        this.token = localStorage.getItem("token");
    }
    NotesProvider.prototype.getNoteDetail = function (note_id) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': this.token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(localStorage.getItem("endpoint") + '/notes/' + note_id, httpOptions);
    };
    NotesProvider.prototype.updateNote = function (note_id, note_title, note_content) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': this.token,
                'Content-Type': 'application/json'
            })
        };
        var data = {
            note_id: note_id,
            note_title: note_title,
            note_content: note_content
        };
        return this.http.put(localStorage.getItem("endpoint") + '/notes/update', JSON.stringify(data), httpOptions);
    };
    NotesProvider.prototype.deleteNote = function (note_id) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': this.token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete(localStorage.getItem("endpoint") + '/notes/delete/' + note_id, httpOptions);
    };
    NotesProvider.prototype.createNote = function (note_title, note_content) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': this.token,
                'Content-Type': 'application/json'
            })
        };
        var data = {
            note_title: note_title,
            note_content: note_content
        };
        return this.http.post(localStorage.getItem("endpoint") + '/notes/create', JSON.stringify(data), httpOptions);
    };
    NotesProvider.prototype.getAllNotes = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': this.token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(localStorage.getItem("endpoint") + '/notes/user', httpOptions);
    };
    NotesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotesProvider);
    return NotesProvider;
}());

//# sourceMappingURL=notes.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map