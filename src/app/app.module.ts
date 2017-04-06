import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { masterFirebaseConfig } from './api-keys';
import { AdminComponent } from './admin/admin.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

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
    AdminComponent,
    ProjectDetailsComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
