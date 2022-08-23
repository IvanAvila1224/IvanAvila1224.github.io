import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
