import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoPersona } from "./tipoEmpresa.model";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    personaId: number;

    @OneToOne(()=> TipoPersona)
    @JoinColumn()
    tipoPersona: TipoPersona;

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