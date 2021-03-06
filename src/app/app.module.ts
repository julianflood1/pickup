import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { FirebaseToAppService } from './firebase-app.service';
import { GameService } from './game.service';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuthModule } from 'angularfire2/auth'; //authmod


import { SelectComponent } from './select/select.component';

import { AlbertaSortPipe } from './alberta.pipe';
import { IrvingSortPipe } from './irving.pipe';
import { ChinatownSortPipe } from './chinatown.pipe';
import { ColonelSortPipe } from './colonel.pipe';
import { LaurelhurstSortPipe } from './laurelhurst.pipe';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    AddComponent,
    GameplayComponent,
    SelectComponent,
    AlbertaSortPipe,
    IrvingSortPipe,
    ChinatownSortPipe,
    ColonelSortPipe,
    LaurelhurstSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService, FirebaseToAppService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
