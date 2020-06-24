
export class Usuario {
    id: number;
    usuario: string;
    nombreyApellido: string;
    contrasenia: string;
    dni:number;
    fechaDeNacimiento: Date;
    telefono:number;
    foto:string;
    especialidad: string;  
    profesion: String;

    static fromJson(usuarioJSON): Usuario {
        return Object.assign(new Usuario(), usuarioJSON)
    }
}