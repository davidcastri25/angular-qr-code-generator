/* Angular Imports */
import { Component, OnInit } from '@angular/core';


/* App Imports */
import { CodigoQR } from '../shared/codigo-qr.interface';
import { CodigoQrService } from '../shared/codigo-qr.service';

@Component({
  selector: 'app-lista-codigos',
  templateUrl: './lista-codigos.component.html',
  styleUrls: ['./lista-codigos.component.css']
})

export class ListaCodigosComponent implements OnInit {

  /* Properties */
  codigosQR: CodigoQR[] = [];

  /* Constructor */
  constructor(private codigoQRService: CodigoQrService) { }

  /* Lifecycle hooks */
  ngOnInit(): void {
    //Llamamos al método para tener nuestro array de códigos al momento de inicializar el componente
    this.getCodigosQR();
  }

  /* Methods */
  //Obtenemos array de códigos
  getCodigosQR() {
    this.codigosQR = this.codigoQRService.getCodigosQR();
  }
}
