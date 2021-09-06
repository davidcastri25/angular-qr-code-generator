/* Interfaz de código QR */
export interface CodigoQR {
    id: number;
    nombre: string;
    valor: string;
    tamanio: number;
    nivel: "L" | "M" | "Q" | "H";
}