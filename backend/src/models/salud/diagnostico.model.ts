import { HistorialMedico } from '../animal/historialMedico.model';
import { Enfermedad } from './enfermedad.model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";

@Entity( )
export class Diagnostico{
    @PrimaryColumn()
    id: number;
    @ManyToOne(() => HistorialMedico)
    @JoinColumn()
    historial:  HistorialMedico;

    @ManyToOne(() => Enfermedad)
    @JoinColumn()
    enfermedad: Enfermedad;

    @Column({ nullable: true})
    fecha: Date;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

