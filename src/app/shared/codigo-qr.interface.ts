/* Interfaz de código QR */
export interface CodigoQR {
    id: number;
    nombre: string;
    valor: string;
    tamanio: string;
    nivel: "L" | "M" | "Q" | "H";
}