import { historialMedico } from '../animal/historialMedico.model';
import { Enfermedad } from './enfermedad.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";

@Entity( )
export class Diagnostico{
    @PrimaryColumn()
    id: number;
    @OneToOne(() => historialMedico)
    @JoinColumn()
    historial:  historialMedico;

    @OneToOne(() => Enfermedad)
    @JoinColumn()
    enfermedad: Enfermedad;

    @Column()
    fecha: Date;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

