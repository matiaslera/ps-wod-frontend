
export class Presupuesto {
    id: number;
    nombre: string;
    especialidad: string;
    descripcion: string;
    monto: number;
    fecha: Date;
    notas: string;
	 
    static fromJson(problemJSON): Presupuesto {
        return Object.assign(new Presupuesto(), problemJSON)
    }
}