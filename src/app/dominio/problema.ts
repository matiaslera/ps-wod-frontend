
export class Problema {
    id: number;
    nombre: string;
    especialidad: string;
    monto: number;
    fecha: Date;

        
    static fromJson(problemJSON): Problema {
        return Object.assign(new Problema(), problemJSON)
    }
}