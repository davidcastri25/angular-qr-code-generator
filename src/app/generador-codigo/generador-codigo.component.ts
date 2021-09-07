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
    //Obtenemos el ID del último elemento de nuestro array y le sumamos uno para el nuevo ID
    let nuevoID = this.codigoQRService.getUltimoID() + 1;

    //Comprobamos si los campos nombre y valor están vacíos
    if (!this.nombre.trim() || !this.valor.trim()) { return; }
    
    //Generamos nuevo objeto con las propiedades para código QR
    let nuevoCodigoQR: CodigoQR = {
      id: nuevoID,
      nombre: this.nombre,
      valor: this.valor,
      tamanio: this.tamanio,
      nivel: this.nivel
    }

    //Pasamos este nuevo objeto al servicio para que lo suba al array
    this.codigoQRService.addNuevoCodigoQR(nuevoCodigoQR)
      .subscribe();

    //Limpiamos los campos
    this.nombre = '';
    this.valor = '';
    this.tamanio = 200;
    this.nivel = 'L';
  }
}
