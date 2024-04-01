import { Telefono } from './telefono.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Persona } from "./persona.model";

@Entity( )
export class personaXtelefono{
    @PrimaryColumn()
    id: number;
    @OneToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @OneToOne(()=>Telefono)
    @JoinColumn()
    telefono: Telefono;

    @Column({ nullable: false,default: false  })
    esPrincipal: boolean;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

