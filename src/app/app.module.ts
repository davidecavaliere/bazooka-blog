import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { Logger } from './service/logger.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './directive/toolbar/toolbar.component';

import { LayoutPaddingDirective, LayoutMarginDirective } from './directive/layout.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LayoutPaddingDirective,
    LayoutMarginDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
  ],
  providers: [Logger],
  bootstrap: [AppComponent, ToolbarComponent]
})
export class AppModule {


}
