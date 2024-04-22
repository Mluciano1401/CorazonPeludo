import { EstadoCivil } from "src/models/tercero/estadoCivil.model";
import { TipoPersona } from "src/models/tercero/tipoPersona.model";

export class solitanteDTO{
    nombre: string;
    apellido: string;
    email: string;
    estadoCivil: EstadoCivil;
    sexo: string;
    licenciaConducir: string;
    tipoPersona: TipoPersona;
    foto: string;
    fechaNacimiento: Date;
    cedula: string;
    pasaporte: string;
    fechaModificacion: Date;
}