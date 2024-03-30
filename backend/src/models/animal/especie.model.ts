import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'animal', name: 'especie' })
export class Especie{
    @PrimaryGeneratedColumn()
    especieId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

