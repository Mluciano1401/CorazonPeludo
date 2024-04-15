import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEmpresa } from "./tipoEmpresa.model";
import { TipoPersona } from "./tipoPersona.model";
import { EstadoCivil } from "./estadoCivil.model";
import { Direccion } from "../miscelaneo/direccion.model";
import { personaXtelefono } from "./personaXtelefono.model";

@Entity( )
export class Persona {
    @PrimaryGeneratedColumn()
    personaId: number;

    @ManyToOne(()=> TipoPersona)
    @JoinColumn()
    tipoPersona: TipoPersona;

    @Column({ nullable: false })
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
    pasaporte:string;

    @Column()
    fechaNacimiento:Date;  
    @Column()
    licenciaConducir:string;

    @ManyToOne(()=> Direccion)
    @JoinColumn()
    direccion: Direccion;

    @Column()
    sexo:string;
    
    @Column()
    genero:string;
    
    @ManyToOne(()=> EstadoCivil)
    @JoinColumn()
    estadoCivil: EstadoCivil;

    @ManyToOne(()=> TipoEmpresa)
    @JoinColumn()
    tipoEmpresa: TipoEmpresa;

    @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}