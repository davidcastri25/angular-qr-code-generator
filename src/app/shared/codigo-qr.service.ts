/* Angular Imports */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* App Imports */
import { CODIGOSQR } from './mock-codigos-qr';
import { CodigoQR } from './codigo-qr.interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CodigoQrService {

  /* Properties */
  codigosQrUrl = 'api/CODIGOSQR'; //URL para la WEB API (CODIGOSQR es la constante que contiene el array de objetos en el servicio in-memory)

  /* Constructor */
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /* Methods */
  //GET códigos QR del servidor
  getCodigosQR(): Observable<CodigoQR[]> {
    return this.http.get<CodigoQR[]>(this.codigosQrUrl);
  }

  //Método que devuelve el último ID del array de códigos QR
  getUltimoID(): number {
    let ultimoID: number = CODIGOSQR[CODIGOSQR.length - 1].id;
    return ultimoID; 
  }

  //Método para subir un nuevo objeto al array
  pushNuevoCodigoQR(codigoQR: CodigoQR): void {
    CODIGOSQR.push(codigoQR);
  }

  //Método para gestionar mensajes
  private log(mensaje: string) {
    this.messageService.add(`${mensaje}`);
  }
}
