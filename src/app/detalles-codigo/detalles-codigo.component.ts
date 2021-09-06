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

  /* Constructor */
  constructor() { }

  /* Lifecycle hooks */
  ngOnInit(): void {
  }

  /* Methods */

}
