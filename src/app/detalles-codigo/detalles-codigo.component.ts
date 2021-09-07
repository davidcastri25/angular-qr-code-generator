/* Angular Imports */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

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
  @Input() selectedCodigoQR!: CodigoQR;
  @Input() nombre!: string;
  @Input() valor!: string;
  @Input() tamanio!: number;
  @Input() nivel!: "L" | "M" | "Q" | "H";
  @Output() onDeleteCodigoQR = new EventEmitter();
  
  masDeCienLenght: string = ""; //Propiedad para controlar el length en el display de la propiedad valor  

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
    if (this.valor.length > 100) {
      this.masDeCienLenght = "..."
    } 
  }

  //Pasamos el código QR a eliminar al servicio para que él lo elimine
  delete(codigoQR: CodigoQR): void {
    this.codigoQrService.deleteCodigoQR(codigoQR.id).subscribe();
    this.onDeleteCodigoQR.emit(true);    
  }

}
