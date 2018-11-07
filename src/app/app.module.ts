import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { NoteList }  from '../pages/notelist/notelist';
import { NoteDetail } from '../pages/notedetail/notedetail'; 
import { NoteCreation } from '../pages/notecreation/notecreation';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { NotesProvider } from '../providers/notes/notes'; 

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    NoteList,
    NoteDetail,
    NoteCreation
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    NoteList,
    NoteDetail,
    NoteCreation
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    NotesProvider
  ]
})
export class AppModule {}
