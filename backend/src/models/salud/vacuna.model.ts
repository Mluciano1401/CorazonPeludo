import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Medicamento } from "./medicamento.model";

@Entity( )
export class Vacuna{
    @PrimaryGeneratedColumn()
    vacunaId: number;

    @ManyToOne(() => Medicamento)
    @JoinColumn()
    medicamento: Medicamento;

    @Column()
    edadMinima:number;

    @Column()
    edadMaxima: number;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

