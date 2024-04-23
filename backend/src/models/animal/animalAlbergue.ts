import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "./animal.model";
import { Almacen } from "../almacen/almacen.model";

@Entity()
export class AnimalAlbergue {
    @PrimaryGeneratedColumn()
    animalId: number;

    @Column({ nullable: true})
    jaula: string;

    @ManyToOne(()=> Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToOne(()=> Almacen)
    @JoinColumn()
    almacen: Almacen;

    @Column({ nullable: true})
    estado: number;

    @Column({ nullable: true})
    fechaIngreso: Date;

    @Column({ nullable: true})
    fechaSalida: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}