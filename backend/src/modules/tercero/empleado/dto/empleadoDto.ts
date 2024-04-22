import { EstadoCivil } from "src/models/tercero/estadoCivil.model";
import { TipoEmpleado } from "src/models/tercero/tipoEmpleado.model";
import { TipoPersona } from "src/models/tercero/tipoPersona.model";

export class empleadoDTO{
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
    tipoEmpleado: TipoEmpleado;
    puesto: string;
    sueldo: number;
    fechaIngreso: Date;
    status: boolean;
}