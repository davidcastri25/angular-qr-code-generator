/* Angular Imports */
import { Injectable } from '@angular/core';
import { CodigoQR } from './codigo-qr.interface';

/* App Imports */
import { CODIGOSQR } from './mock-codigos-qr';

@Injectable({
  providedIn: 'root'
})

export class CodigoQrService {

  constructor() { }

  /* Methods */
  //Obtener nuestro array de códigos
  getCodigosQR(): CodigoQR[] {
    return CODIGOSQR;
  }
}
