/* Angular Imports */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-codigo',
  templateUrl: './detalles-codigo.component.html',
  styleUrls: ['./detalles-codigo.component.css']
})

export class DetallesCodigoComponent implements OnInit {

  /* Properties */
  @Input() nombre!: string;
  @Input() valor!: string;
  @Input() tamanio!: number;
  @Input() nivel!: "L" | "M" | "Q" | "H";
  masDeCienLenght: string = "";

  /* Constructor */
  constructor() { }

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

}
