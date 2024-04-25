import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Medicamento } from "./medicamento.model";

@Entity( )
export class Vacuna{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Medicamento)
    @JoinColumn()
    medicamento: Medicamento;

    @Column({ nullable: true})
    edadMinima:number;

    @Column({ nullable: true})
    edadMaxima: number;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

