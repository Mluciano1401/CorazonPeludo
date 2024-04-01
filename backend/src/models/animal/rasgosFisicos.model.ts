import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoPiel } from "./tipoPiel.model";

@Entity()
export class RasgosFisicos{
    @PrimaryGeneratedColumn()
    rasgosFísicosId: number;

    @OneToOne(()=> TipoPiel)
    @JoinColumn()
    tipoPiel: TipoPiel;

    @Column()
    amputaciones: boolean;

    @Column()
    tipoAmputacion: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

