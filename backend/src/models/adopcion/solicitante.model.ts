import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "../tercero/persona.model";
import { ActividadEconomica } from "./actividadEconomica.model";

@Entity( )
export class Solicitante {
    @PrimaryGeneratedColumn()
    SolicitanteId: number;

    @OneToOne(()=>Persona)
    @JoinColumn()
    persona: Persona;

    @Column()
    situacionFamiliar: number;

    @Column({ nullable: false, default: 0 })
    ingresosMensuales: number;

    @OneToOne(()=> ActividadEconomica)
    @JoinColumn()
    actividadEconomica: ActividadEconomica;

    @Column()
    dependencia: boolean;

    @Column()
    numeroDependientes: number;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}