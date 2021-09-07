/* Angular Imports */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

/* App Imports */
import { CODIGOSQR } from './mock-codigos-qr';
import { CodigoQR } from './codigo-qr.interface';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})

export class CodigoQrService {

  /* Properties */
  codigosQrUrl = 'api/CODIGOSQR'; //URL para la WEB API (CODIGOSQR es la constante que contiene el array de objetos en el servicio in-memory)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  

  /* Constructor */
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /* Methods */
  //GET códigos QR del servidor
  getCodigosQR(): Observable<CodigoQR[]> {
    return this.http.get<CodigoQR[]>(this.codigosQrUrl)
      .pipe( //Manejamos el Observable que nos devuelve .get
        tap(_ => this.log('Códigos QR cargados del servidor')), //Generamos mensaje de éxito
        catchError(this.handleError<CodigoQR[]>('getCodigosQR', [])) //Interceptará el Observable si falla y pasará el método handleError. Devuelve el nombre de la operación que ha fallado y un array vacío
      );
  }

  //Método para manejar un Observable fallido (nombre de operación fallida, opcional: valor a devolver como resultado de Observable)
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //Sacamos el error por consola
      console.error(error);

      //Guardamos mensaje en el message.service
      this.log(`${operation} failed: ${error.message}`);

      //Devolvemos un resultado vacío para que la app siga funcionando
      return of(result as T);
    }
  }

  //Método que devuelve el último ID del array de códigos QR
  getUltimoID(): number {
    let ultimoID: number = CODIGOSQR[CODIGOSQR.length - 1].id;
    return ultimoID; 
  }

  //Método para subir un nuevo objeto al array
  addNuevoCodigoQR(codigoQR: CodigoQR): Observable <CodigoQR> {
    return this.http.post<CodigoQR>(this.codigosQrUrl, codigoQR, this.httpOptions).pipe(
      tap((newCodigoQR: CodigoQR) => this.log(`Nuevo código añadido. ID = ${newCodigoQR.id}`)),
      catchError(this.handleError<CodigoQR>('addNuevoCodigoQR'))
    );
  }

  //Método para eliminar código QR del servidor
  deleteCodigoQR(id: number): Observable<CodigoQR> {
    //URL necesaria para borrar según la API In-Memory
    const url = `${this.codigosQrUrl}/${id}`;

    //Devolvemos el observable
    return this.http.delete<CodigoQR>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Código QR eliminado. ID = ${id}`)),
      catchError(this.handleError<CodigoQR>('deleteCodigoQR'))
    );
  }

  //Método para gestionar mensajes
  private log(mensaje: string) {
    this.messageService.add(`${mensaje}`);
  }
}
