import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Enfermedad } from "./enfermedad.model";
import { Sintoma } from "./sintomas.model";


@Entity( )
export class enfermedadXsintomas{
    @PrimaryColumn()
    @OneToOne(() => Enfermedad)
    @JoinColumn()
    enfermedad: Enfermedad;

    @PrimaryColumn()
    @OneToOne(() => Sintoma)
    @JoinColumn()
    sintoma: Sintoma;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

