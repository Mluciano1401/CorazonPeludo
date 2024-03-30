import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";
import { Estado } from "./estado.model";

@Entity({ schema: 'miscelaneo', name: 'cita' })
export class Cita{
    @PrimaryGeneratedColumn()
    citaId: number;

    @ManyToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column()
    fecha: Date;

    @Column()
    hora: Date;
    
    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

