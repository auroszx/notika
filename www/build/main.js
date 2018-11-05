webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notelist_notelist__ = __webpack_require__(199);
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
                alert("All good");
            }
        });
    };
    WelcomePage.prototype.toggleView = function () {
        this.signup = !this.signup;
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'welcome',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notikha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Welcome to Notikha! Please login or create an account.\n\n  	<ion-list>\n  		<ion-item>\n    		<ion-label color="primary">Username</ion-label>\n    		<ion-input placeholder="Username" type="text" [(ngModel)]="username"></ion-input>\n  		</ion-item>\n      <ion-item *ngIf="signup">\n        <ion-label color="primary">Full name</ion-label>\n        <ion-input placeholder="E.g.: John Doe" type="text" [(ngModel)]="fullname"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="signup">\n        <ion-label color="primary">Email</ion-label>\n        <ion-input placeholder="E.g.: john.doe@example.com" type="text" [(ngModel)]="email"></ion-input>\n      </ion-item>\n  		<ion-item>\n			<ion-label color="primary">Password</ion-label>\n    		<ion-input placeholder="Password" type="password" [(ngModel)]="password"></ion-input>\n  		</ion-item>\n  	</ion-list>\n\n  <button ion-button color="primary" (click)="doLogin()" *ngIf="!signup">\n    Login\n  </button>\n\n  <button ion-button color="primary" (click)="doSignup()" *ngIf="signup">\n    Signup\n  </button>\n\n  <a (click)="toggleView()" id="signuplink" *ngIf="!signup">I don\'t have an account</a>\n  <a (click)="toggleView()" id="loginlink" *ngIf="signup">I have an account</a>\n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(198);
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
        return this.http.post('http://localhost:3000/user/login', JSON.stringify(data), httpOptions);
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
        return this.http.post('http://localhost:3000/user/create', JSON.stringify(data), httpOptions);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    function NoteList(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    NoteList.prototype.doToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
    };
    NoteList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notelist',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/notelist/notelist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Notes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  There should be notes here.\n\n  \n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/notelist/notelist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], NoteList);
    return NoteList;
}());

//# sourceMappingURL=notelist.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notelist_notelist__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notedetail_notedetail__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_notes_notes__ = __webpack_require__(277);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_notedetail_notedetail__["a" /* NoteDetail */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notelist_notelist__["a" /* NoteList */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notedetail_notedetail__["a" /* NoteDetail */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_notes_notes__["a" /* NotesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(196);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__ = __webpack_require__(277);
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
            _this.note_title = _this.response.note_title;
            _this.note_content = _this.response.note_content;
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
            selector: 'notedetail',template:/*ion-inline-start:"/home/andres/Escritorio/notikha/src/pages/notedetail/notedetail.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title *ngIf="!editing">\n      {{note_title}}\n    </ion-title>\n    <ion-title *ngIf="editing">\n      Edit note\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toggleEdit()" *ngIf="!editing">\n        <ion-icon name="create"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="deleteNote()" *ngIf="!editing">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="editNote()" *ngIf="editing">\n	    <ion-icon name="checkmark"></ion-icon>\n	  </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <p *ngIf="!editing">note_content</p>\n\n  \n  <ion-input placeholder="Note title (required)" type="text" [(ngModel)]="note_title" *ngIf="editing"></ion-input>\n\n  <ion-textarea placeholder="Your note content goes here" [(ngModel)]="note_content" *ngIf="editing"></ion-textarea>\n\n</ion-content>\n'/*ion-inline-end:"/home/andres/Escritorio/notikha/src/pages/notedetail/notedetail.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__["a" /* NotesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_notes_notes__["a" /* NotesProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _d || Object])
    ], NoteDetail);
    return NoteDetail;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=notedetail.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(198);
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
        return this.http.get('http://localhost:3000/notes/' + note_id, httpOptions);
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
        return this.http.put('http://localhost:3000/notes/update', JSON.stringify(data), httpOptions);
    };
    NotesProvider.prototype.deleteNote = function (note_id) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': this.token,
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete('http://localhost:3000/notes/delete/' + note_id, httpOptions);
    };
    NotesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], NotesProvider);
    return NotesProvider;
    var _a;
}());

//# sourceMappingURL=notes.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map