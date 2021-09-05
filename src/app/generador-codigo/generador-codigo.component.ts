import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador-codigo',
  templateUrl: './generador-codigo.component.html',
  styleUrls: ['./generador-codigo.component.css']
})
export class GeneradorCodigoComponent implements OnInit {

  /* Properties */
  public nombre: string = "";
  public values: string = "";
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  /* Constructor */
  constructor() {
    this.level = "L"; 
    /* 
      Mainly used for QR Correction level. How much error correction may be required:
        Level L – up to 7% damage
        Level M – up to 15% damage
        Level Q – up to 25% damage
        Level H – up to 30% damage
    */
    // this.values = "";
    this.width = 200;
  }

  /* Lifecycle hooks */
  ngOnInit(): void {
  }

  /* Methods */
  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(nombre: string, val: string) {
    this.nombre = nombre;
    this.values = val;    
  }

  qrWidth(val: number) {
    this.width = val;
  }
}
