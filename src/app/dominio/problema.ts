import { Oferta } from './oferta';

export class Presupuesto {
    id: number;
    idCreador: number;
    problema: string;
    especialidad: string;
    descripcion: string;
    direccion: string;
    notas: string;
    monto: number;
    realizado:boolean;
    fecha: Date;
    ofertas:Oferta;
	 
    static fromJson(problemJSON): Presupuesto {
        return Object.assign(new Presupuesto(), problemJSON)
    }

    constructor(_id?:number,_idCreador?: number,_problema?: string,_especialidad?: string,_descripcion?: string,_direccion?: string,_notas?: string,
        _monto?: number,_realizado?:boolean,_fecha?: Date,_ofertas?:Oferta){
            this.id=_id ;
    this.idCreador=_idCreador;
    this.problema=_problema;
    this.especialidad=_especialidad;
    this.descripcion=_descripcion;
    this.direccion=_direccion;
    this.notas=_notas;
    this.monto=_monto;
    this.realizado= _realizado;
    this.fecha=_fecha;
    this.ofertas=_ofertas;
    }
}