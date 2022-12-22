import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheatreListComponent } from './main-page/theatre-list/theatre-list.component';
import { CinemaListComponent } from './main-page/cinema-list/cinema-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NetworkLayerService } from 'src/shared/services/network-layer.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';
import { ItemCardComponent } from './main-page/card/entity-card.component';
import { ErrorCatchingInterceptor } from 'src/shared/interceptors/error-interceptor';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    TheatreListComponent,
    CinemaListComponent,
    MainPageComponent,
    ItemCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    ToastModule
  ],
  providers: [
    NetworkLayerService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
