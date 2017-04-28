import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
   apiKey: "AIzaSyC-q9yDnXwoLOqzUQZswZXGDu9RLBwGU3Y",
   authDomain: "bazooka-c2e65.firebaseapp.com",
   databaseURL: "https://bazooka-c2e65.firebaseio.com",
   storageBucket: "bazooka-c2e65.appspot.com",
   messagingSenderId: "739437306170"
 };

import { Logger } from './service/logger.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './directives/toolbar/toolbar.component';
import { LoginComponent } from './modules/login/login.component';
import { LayoutPaddingDirective, LayoutMarginDirective } from './directives/layout.directive';

import { StoryListComponent } from './modules/stories/story-list.component';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './service/auth.service';
import { SocketService } from './service/socket.service';
import { StoryService } from './service/story.service';
import { NgMessagesDirective, NgMessageDirective } from './directives/ng-messages.directive';
import { SignupComponent } from './modules/signup/signup.component';

import { CookieService } from 'angular2-cookie/core';
import { AdminComponent, MyAsync } from './admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutPaddingDirective,
    LayoutMarginDirective,
    LoginComponent,
    StoryListComponent,
    NgMessagesDirective,
    NgMessageDirective,
    SignupComponent,
    AdminComponent,
    MyAsync
  ],
  providers: [Logger, AuthService, SocketService, StoryService, CookieService],
  bootstrap: [AppComponent]

})
export class AppModule {


}
