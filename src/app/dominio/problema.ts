import { Oferta } from './oferta';

export class Presupuesto {
    id: number;
    idCreador: number;
    problema: string;
    especialidad: string;
    descripcion: string;
    direccion: string;
    monto: number;
    fecha: Date;
    notas: string;
    ofertas:Oferta;
	 
    static fromJson(problemJSON): Presupuesto {
        return Object.assign(new Presupuesto(), problemJSON)
    }
}