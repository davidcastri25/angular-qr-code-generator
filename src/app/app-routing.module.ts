/* Angular Imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* App Imports */
import { GeneradorCodigoComponent } from './generador-codigo/generador-codigo.component';
import { ListaCodigosComponent } from './lista-codigos/lista-codigos.component';

/* Rútas */
const ROUTES: Routes = [
  { path: '', redirectTo: '/listaQR', pathMatch: 'full' },
  { path: 'listaQR', component: ListaCodigosComponent },
  { path: 'generadorQR', component: GeneradorCodigoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
