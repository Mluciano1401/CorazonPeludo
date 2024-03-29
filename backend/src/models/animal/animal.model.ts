import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Especie } from "./especie.model";

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

    @Column()
    rasgosFisicosId: number;

    @Column()
    origen: number;

    @Column()
    estado: number;

    @Column()
    fechaIngreso: Date;

    @Column()
    fechaModificacion: Date;
    
    @Column()
    status:boolean;
}