import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sintoma } from "./sintomas.model";

@Entity( )
export class EfectosSecundarios{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Sintoma)
    @JoinColumn()
    sintoma: Sintoma;

    @Column({ nullable: true})
    duracion: number;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

