import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sintoma } from "./sintomas.model";

@Entity( )
export class EfectosSecundarios{
    @PrimaryGeneratedColumn()
    efectosSecundariosId: number;

    @ManyToOne(() => Sintoma)
    @JoinColumn()
    sintoma: Sintoma;

    @Column()
    duracion: number;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

