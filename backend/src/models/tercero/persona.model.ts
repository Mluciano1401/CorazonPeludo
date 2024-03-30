import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoEmpresa } from "./tipoEmpresa.model";
import { TipoPersona } from "./tipoPersona.model";
import { EstadoCivil } from "./estadoCivil.model";
import { Direccion } from "../miscelaneo/direccion.model";

@Entity({ schema: 'tercero', name: 'persona' })
export class Persona {
    @PrimaryGeneratedColumn()
    personaId: number;

    @OneToOne(()=> TipoPersona)
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

    @OneToOne(()=> TipoEmpresa)
    @JoinColumn()
    tipoEmpresa: TipoEmpresa;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}