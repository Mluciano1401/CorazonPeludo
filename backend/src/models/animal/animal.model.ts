import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Especie } from "./especie.model";
import { RasgosFísicos } from "./rasgosFisicos.model";

@Entity({ schema: 'animal', name: 'animal' })
export class Animal {
    @PrimaryGeneratedColumn()
    animalId: number;

    @Column()
    alias: string;

    @Column()
    identificador: number;

    @ManyToOne(()=> Especie)
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

    @OneToOne(()=> RasgosFísicos)
    @JoinColumn()
    rasgosFisicos: RasgosFísicos;

    @Column()
    origen: number;

    @Column()
    estado: number;

    @Column()
    fechaIngreso: Date;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}