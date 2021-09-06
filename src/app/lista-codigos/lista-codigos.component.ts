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
  codigosQR: CodigoQR[] = []; //Array que llenaré con la simulación de servidor
  selectedCodigoQR?: CodigoQR;

  /* Constructor */
  constructor(private codigoQRService: CodigoQrService) { }

  /* Lifecycle hooks */
  ngOnInit(): void {
    //Llamamos al método para tener nuestro array de códigos al momento de inicializar el componente
    this.getCodigosQR();
  }

  /* Methods */
  //Obtenemos array de códigos subscribiendo Observable
  getCodigosQR(): void {
    this.codigoQRService.getCodigosQR()
      .subscribe(codigosQR => this.codigosQR = codigosQR);    
  }

  //Obtenemos el código seleccionado por el usuario
  onCodigoQRSeleccionado(codigoQR: CodigoQR) {
    this.selectedCodigoQR = codigoQR;
  }
}
