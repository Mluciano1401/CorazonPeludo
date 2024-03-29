import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estado{
    @PrimaryGeneratedColumn()
    estadoId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

