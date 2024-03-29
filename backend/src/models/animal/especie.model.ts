import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Especie{
    @PrimaryGeneratedColumn()
    especieId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

