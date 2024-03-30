import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoPiel } from "./tipoPiel.model";

@Entity({ schema: 'animal', name: 'rasgosFisicos' })
export class RasgosFísicos{
    @PrimaryGeneratedColumn()
    rasgosFísicosId: number;

    @ManyToOne(()=> TipoPiel)
    @JoinColumn()
    tipoPiel: TipoPiel;

    @Column()
    amputaciones: boolean;

    @Column()
    tipoAmputacion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

