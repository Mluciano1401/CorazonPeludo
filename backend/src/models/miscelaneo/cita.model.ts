import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";
import { Estado } from "./estado.model";

@Entity()
export class Cita{
    @PrimaryGeneratedColumn()
    citaId: number;

    @ManyToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column({ nullable: true})
    fecha: Date;

    @Column({ nullable: true})
    hora: Date;
    
    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

