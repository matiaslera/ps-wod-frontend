
export class Presupuesto {
    id: number;
    problema: string;
    especialidad: string;
    descripcion: string;
    direccion: string;
    monto: number;
    fecha: Date;
    notas: string;
	 
    static fromJson(problemJSON): Presupuesto {
        return Object.assign(new Presupuesto(), problemJSON)
    }
}