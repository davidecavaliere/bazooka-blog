import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { Logger } from './service/logger.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './directive/toolbar/toolbar.component';
import { LoginComponent } from './modules/login/login.component';
import { LayoutPaddingDirective, LayoutMarginDirective } from './directive/layout.directive';

import { StoryListComponent } from './modules/stories/story-list.component';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './service/auth.service';
import { SocketService } from './service/socket.service';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutPaddingDirective,
    LayoutMarginDirective,
    LoginComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [Logger, AuthService, SocketService],
  bootstrap: [AppComponent]

})
export class AppModule {


}
