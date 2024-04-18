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

    @Column({ nullable: true})
    apellido: string;

    @Column({ nullable: true})
    email:string;

    @Column({ nullable: true})
    foto:string;

    @Column({ nullable: true})
    rnc:string;

    @Column({ nullable: true})
    cedula:string;

    @Column({ nullable: true})
    pasaporte:string;

    @Column({ nullable: true})
    fechaNacimiento:Date;  
    @Column({ nullable: true})
    licenciaConducir:string;

    @ManyToOne(()=> Direccion)
    @JoinColumn()
    direccion: Direccion;

    @Column({ nullable: true})
    sexo:string;
    
    @Column({ nullable: true})
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