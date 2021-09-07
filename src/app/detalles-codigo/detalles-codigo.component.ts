/* Angular Imports */
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

/* App Imports */
import { CodigoQR } from '../shared/codigo-qr.interface';
import { CodigoQrService } from '../shared/codigo-qr.service';

@Component({
  selector: 'app-detalles-codigo',
  templateUrl: './detalles-codigo.component.html',
  styleUrls: ['./detalles-codigo.component.css']
})

export class DetallesCodigoComponent implements OnInit {

  /* Properties */
  //Propiedad que cogerá el elemento clickado
  @Input() selectedCodigoQR!: CodigoQR; 
  //Propiedades para construir el QR
  @Input() nombre!: string;
  @Input() valor!: string;
  @Input() tamanio!: number;
  @Input() nivel!: "L" | "M" | "Q" | "H";
  //Emisor de evento para que el elemento padre sepa que se ha borrado un elemento  
  @Output() onDeleteCodigoQR = new EventEmitter();
  //Propiedad para controlar el length en el display de la propiedad valor  
  masDeCienLenght: string = "";  

  /* Constructor */
  constructor(private codigoQrService: CodigoQrService) { }

  /* Lifecycle hooks */
  ngOnInit(): void {
    this.checkMasDeCienLength();
    
  }  

  /* Methods */
  //Checkeamos si el string de valor tiene más de 100 caracteres, para que a nivel visual aparezca .. al cortalo mediante el pipe slice
  checkMasDeCienLength() {
    this.masDeCienLenght = "";
    if (this.valor.length > 60) {
      this.masDeCienLenght = "..."
    } 
  }

  //Pasamos el código QR a eliminar al servicio para que él lo elimine
  delete(codigoQR: CodigoQR): void {
    this.codigoQrService.deleteCodigoQR(codigoQR.id).subscribe();
    this.onDeleteCodigoQR.emit(true);    
  }
}
