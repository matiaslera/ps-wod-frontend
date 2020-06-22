import { Usuario } from './usuario';

export class Oferta {

    id: number;
    profesional: Usuario;
    descripcion: string;
    fechaCreada: Date;
    monto: number;
	 
    static fromJson(ofertaJSON): Oferta {
        return Object.assign(new Oferta(), ofertaJSON)
    }
}