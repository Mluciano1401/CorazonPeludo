import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import { HistorialMedico } from "./historialMedico.model";
import { Vacuna } from "../salud/vacuna.model";
import { Persona } from "../tercero/persona.model";

@Entity( )
export class HistorialVacunas{
    @PrimaryColumn()
    id: number;
    @OneToOne(() => HistorialMedico)
    @JoinColumn()
    historial:  HistorialMedico;

    @OneToOne(() => Vacuna)
    @JoinColumn()
    vacuna:  Vacuna;

    @Column()
    fecha: Date;

    @OneToOne(() => Persona)
    @JoinColumn()
    persona:  Persona;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

