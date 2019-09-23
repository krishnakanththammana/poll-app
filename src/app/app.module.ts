import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollingComponent } from './polling/polling.component';
import { PollService } from './services/poll.service';

@NgModule({
  declarations: [
    AppComponent,
    PollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
