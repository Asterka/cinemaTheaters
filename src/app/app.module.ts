import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheatreListComponent } from './main-page/theatre-list/theatre-list.component';
import { CinemaListComponent } from './main-page/cinema-list/cinema-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NetworkLayerService } from 'src/shared/network-layer.service';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    TheatreListComponent,
    CinemaListComponent,
    MainPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PaginatorModule
  ],
  providers: [
    NetworkLayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
