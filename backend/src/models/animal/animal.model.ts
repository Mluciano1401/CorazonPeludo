import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Especie } from "./especie.model";
import { RasgosFisicos } from "./rasgosFisicos.model";

@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    animalId: number;

    @Column()
    alias: string;

    @Column()
    identificador: number;

    @OneToOne(()=> Especie)
    @JoinColumn()
    especie: Especie;

    @Column()
    foto:string;

    @Column()
    edad: number;

    @Column()
    altura: number;

    @Column()
    peso: number;

    @Column()
    sexo: string;

    @OneToOne(()=> RasgosFisicos)
    @JoinColumn()
    rasgosFisicos: RasgosFisicos;

    @Column()
    origen: number;

    @Column()
    estado: number;

    @Column()
    fechaIngreso: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}