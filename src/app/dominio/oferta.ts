import { Usuario } from './usuario';

export class Oferta {

    id: number;
    comentario: string;
    fechaCreada: Date;
    monto: number;
    idProfesional: number; 
    nombreApellido: string;
    especialidad:string;
	 
    static fromJson(ofertaJSON): Oferta {
        return Object.assign(new Oferta(), ofertaJSON)
    }
}