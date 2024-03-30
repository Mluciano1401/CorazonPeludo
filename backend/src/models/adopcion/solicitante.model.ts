import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";
import { ActividadEconomica } from "./actividadEconomica.model";

@Entity({ schema: 'adopcion', name: 'solicitante' })
export class Solicitante {
    @PrimaryGeneratedColumn()
    SolicitanteId: number;

    @ManyToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column()
    situacionFamiliar: number;

    @Column({ nullable: false, default: 0 })
    ingresosMensuales: number;

    @ManyToOne(()=> ActividadEconomica)
    @JoinColumn()
    actividadEconomica: ActividadEconomica;

    @Column()
    dependencia: boolean;

    @Column()
    numeroDependientes: number;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}