import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";
import { Estado } from "./estado.model";

@Entity()
export class Cita{
    @PrimaryGeneratedColumn()
    citaId: number;

    @OneToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column()
    fecha: Date;

    @Column()
    hora: Date;
    
    @OneToOne(()=> Estado)
    @JoinColumn()
    estado: Estado

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

