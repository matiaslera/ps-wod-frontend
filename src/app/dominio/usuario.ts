
export class Usuario {
    id: number;
    idUsuario: string;
    nombre: string;
    apellido: string;
    password: string;
    saldo: number;
    edad: number;
    pathImagen: string;

        
    static fromJson(usuarioJSON): Usuario {
        return Object.assign(new Usuario(), usuarioJSON)
    }
}