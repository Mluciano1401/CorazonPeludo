import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca{
    @PrimaryGeneratedColumn()
    marcaId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

