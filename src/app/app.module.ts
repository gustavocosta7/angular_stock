import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {EstoqueService} from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [EstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
