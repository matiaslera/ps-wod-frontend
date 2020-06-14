
export class Usuario {
    id: number;
    usuario: string;
    nombreyApellido: string;
    contrasenia: string;
   

        
    static fromJson(usuarioJSON): Usuario {
        return Object.assign(new Usuario(), usuarioJSON)
    }
}