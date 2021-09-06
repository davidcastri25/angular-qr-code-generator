import { CodigoQR } from "./codigo-qr.interface";

/* Simulo que he recuperado datos desde un servidor */
export const CODIGOSQR: CodigoQR[] = [
    {
        id: 1,
        nombre: 'Página web de Barcelona Activa',
        valor: 'https://www.barcelonactiva.cat/es/inicio',
        tamanio: 200,
        nivel: 'L'
    },
    {
        id: 2,
        nombre: 'Página web oficial de Angular',
        valor: 'https://angular.io/',
        tamanio: 200,
        nivel: 'L'
    },
    {
        id: 3,
        nombre: 'W3Schools',
        valor: 'https://www.w3schools.com/',
        tamanio: 200,
        nivel: 'L'
    }
]; 