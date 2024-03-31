import { Column, Entity, JoinColumn, OneToOne} from "typeorm";
import { historialMedico } from "./historialMedico.model";
import { Vacuna } from "../salud/vacuna.model";
import { Persona } from "../tercero/persona.model";

@Entity( )
export class HistorialVacunas{
    @OneToOne(() => historialMedico)
    @JoinColumn()
    historial:  historialMedico;

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

