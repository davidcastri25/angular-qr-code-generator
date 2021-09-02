import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /* Properties */
  title = 'angular-qr-code-generator';
  
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
    this.values = "QR code string value";
    this.width = 200;
  }

  /* Methods */
  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }
}
