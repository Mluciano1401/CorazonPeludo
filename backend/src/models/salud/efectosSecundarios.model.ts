import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sintoma } from "./sintomas.model";

@Entity( )
export class EfectosSecundarios{
    @PrimaryGeneratedColumn()
    efectosSecundariosId: number;

    @OneToOne(() => Sintoma)
    @JoinColumn()
    sintoma: Sintoma;

    @Column()
    duracion: number;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

