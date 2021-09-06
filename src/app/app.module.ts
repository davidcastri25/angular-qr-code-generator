/* Angular Imports */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* Third Party Imports */
import { QRCodeModule } from 'angular2-qrcode';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

/* App Imports */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaCodigosComponent } from './lista-codigos/lista-codigos.component';
import { GeneradorCodigoComponent } from './generador-codigo/generador-codigo.component';
import { DetallesCodigoComponent } from './detalles-codigo/detalles-codigo.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './shared/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCodigosComponent,
    GeneradorCodigoComponent,
    DetallesCodigoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    /* Third Party */
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
