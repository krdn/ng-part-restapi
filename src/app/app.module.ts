import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PollingComponent } from './polling/polling.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UserService } from './user-car/user.service';
import { BithumbService } from './bithumb/bithumb.service';
import { BithumbComponent } from './bithumb/bithumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './material-module';
import { StockService } from './stock/stock.service';
import { StockComponent } from './stock/stock.component';
@NgModule({
  declarations: [
    AppComponent,
    PollingComponent,
    UserCarComponent,
    BithumbComponent,
    StockComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule

  ],
  providers: [UserService, BithumbService, StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
