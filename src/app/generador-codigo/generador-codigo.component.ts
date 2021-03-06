import { Component, OnInit } from '@angular/core';
import { CodigoQR } from '../shared/codigo-qr.interface';
import { CodigoQrService } from '../shared/codigo-qr.service';

@Component({
  selector: 'app-generador-codigo',
  templateUrl: './generador-codigo.component.html',
  styleUrls: ['./generador-codigo.component.css']
})
export class GeneradorCodigoComponent implements OnInit {

  /* Properties */
  public nombre: string = "";
  public valor: string = "";
  public nivel: "L" | "M" | "Q" | "H";
  public tamanio: number;

  /* Constructor */
  constructor(private codigoQRService: CodigoQrService) {
    this.nivel = "L"; 
    /* 
      Mainly used for QR Correction level. How much error correction may be required:
        Level L – up to 7% damage
        Level M – up to 15% damage
        Level Q – up to 25% damage
        Level H – up to 30% damage
    */
    // this.values = "";
    this.tamanio = 200;
  }

  /* Lifecycle hooks */
  ngOnInit(): void {
  }

  /* Methods */
  //Asigna valor a propiedad nivel
  qrNivel(val: "L" | "M" | "Q" | "H") {
    this.nivel = val;
  }

  //Asigna valor a propiedades nombre y valor
  qrData(nombre: string, val: string) {
    this.nombre = nombre;
    this.valor = val;    
  }

  //Asigna valor a propiedad tamaño
  qrTamanio(val: number) {
    this.tamanio = val;
  }

  //Genera un nuevo objeto con los datos para crear código QR y se lo pasa al servicio codigo-qr.service
  onCrearCodigoQR() {
    
    //Comprobamos si los campos nombre y valor están vacíos
    if (!this.nombre.trim() || !this.valor.trim()) { return; }

    //Asigno en variables todas las propiedades excepto ID, ya que In Memory Service la asignará automáticamente
    let nombre = this.nombre;
    let valor = this.valor;
    let tamanio = this.tamanio;
    let nivel = this.nivel;

    //Pasamos las propiedades como si fueran un objeto de CodigoQR al servicio para que lo suba al array
    this.codigoQRService.addNuevoCodigoQR({
      nombre,
      valor,
      tamanio,
      nivel
    } as CodigoQR)
      .subscribe();

    //Limpiamos los campos
    this.nombre = '';
    this.valor = '';
    this.tamanio = 200;
    this.nivel = 'L';
  }
}
