import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "../miscelaneo/estado.model";
import { ProcesoAdopcion } from "./proceso.model";

@Entity( )
export class PostAdopcion{
    @PrimaryGeneratedColumn()
    postAdopcionId: number;

    @OneToOne(()=> ProcesoAdopcion)
    @JoinColumn()
    adopcion: ProcesoAdopcion;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false})
    fechaInicio: Date;

    @Column()
    condicionAnimal: string;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

