import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoPiel } from "./tipoPiel.model";

@Entity()
export class RasgosFisicos{
    @PrimaryGeneratedColumn()
    rasgosFísicosId: number;

    @ManyToOne(()=> TipoPiel)
    @JoinColumn()
    tipoPiel: TipoPiel;

    @Column({ nullable: true})
    amputaciones: boolean;

    @Column({ nullable: true})
    tipoAmputacion: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

