import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Solicitud } from "./solicitudAdopcion.model";
import { Animal } from "../animal/animal.model";
import { Estado } from "../miscelaneo/estado.model";

@Entity({ schema: 'adopcion', name: 'procesoAdopcion' })
export class ProcesoAdopcion{
    @PrimaryGeneratedColumn()
    procesoAdopcionId: number;

    @OneToOne(()=> Solicitud)
    @JoinColumn()
    solicitud: Solicitud

    @ManyToOne(()=> Animal)
    @JoinColumn()
    animal: Animal;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false})
    fechaInicio: Date;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

