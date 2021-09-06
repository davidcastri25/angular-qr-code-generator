/* Angular Imports */
import { Injectable } from '@angular/core';

/* Thir Party Imports */
import { InMemoryDbService } from 'angular-in-memory-web-api';

/* App Imports */
import { CodigoQR } from './codigo-qr.interface';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CODIGOSQR: CodigoQR[] = [
    {
        id: 1,
        nombre: 'Página web de Barcelona Activa',
        valor: 'https://www.barcelonactiva.cat/es/inicio',
        tamanio: 200,
        nivel: 'L'
    },
    {
        id: 2,
        nombre: 'Página web oficial de Angular',
        valor: 'https://angular.io/',
        tamanio: 200,
        nivel: 'L'
    },
    {
        id: 3,
        nombre: 'W3Schools',
        valor: 'https://www.w3schools.com/',
        tamanio: 200,
        nivel: 'L'
    }
];
    return {CODIGOSQR};
  }

  // Overrides the genId method to ensure that a QR Code always has an id.
  // If the QR Code array is empty,
  // the method below returns the initial number (11).
  // if the QR Code array is not empty, the method below returns the highest
  // QR Code id + 1.
  genId(codigosQR: CodigoQR[]): number {
    return codigosQR.length > 0 ? Math.max(...codigosQR.map(codigoQR => codigoQR.id)) + 1 : 1;
  }
}