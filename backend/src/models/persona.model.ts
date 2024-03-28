import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    PersonaId: number;

    @Column()
    tipoPersonaId: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email:string;

    @Column()
    foto:string;

    @Column()
    rnc:string;

    @Column()
    cedula:string;
    
    @Column()
    licenciaConducir:string;

    @Column()
    sexo:string;
    
    @Column()
    genero:string;
    
    @Column()
    estadoCivil: number;

    @Column()
    tipoEmpresa: number;

    @Column()
    fechaModificacion: Date;
    
    @Column()
    status:boolean;
}