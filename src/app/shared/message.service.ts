/* 
NOTA: NO IMPLEMENTADO

NO SACO MENSAJES POR PANTALLA
*/


/* Angular Imports */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  /* Properties */
  messages: string[] = [];

  /* Methods */
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
