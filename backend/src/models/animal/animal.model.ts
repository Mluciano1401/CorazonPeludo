import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Especie } from "./especie.model";
import { RasgosFisicos } from "./rasgosFisicos.model";


@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    alias: string;

    @Column({ nullable: true})
    identificador: number;

    @ManyToOne(()=> Especie)
    @JoinColumn()
    especie: Especie;

    @Column({ nullable: true})
    foto:string;

    @Column({ nullable: true})
    edad: number;

    @Column({ nullable: true})
    altura: number;

    @Column({ nullable: true})
    peso: number;

    @Column({ nullable: true})
    sexo: string;

    @ManyToOne(()=> RasgosFisicos)
    @JoinColumn()
    rasgosFisicos: RasgosFisicos;

    @Column({ nullable: true})
    origen: number;

    @Column({ nullable: true})
    estado: number;

    @Column({ nullable: true})
    fechaIngreso: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}