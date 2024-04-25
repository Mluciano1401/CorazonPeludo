import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";
import { ActividadEconomica } from "./actividadEconomica.model";

@Entity( )
export class Solicitante {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column({ nullable: true})
    situacionFamiliar: string;

    @Column({ nullable: false, default: 0 })
    ingresosMensuales: number;

    @ManyToOne(()=> ActividadEconomica)
    @JoinColumn()
    actividadEconomica: ActividadEconomica;

    @Column({ nullable: true})
    dependencia: boolean;

    @Column({ nullable: true})
    numeroDependientes: number;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}