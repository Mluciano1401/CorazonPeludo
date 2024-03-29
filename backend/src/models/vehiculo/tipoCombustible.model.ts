import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoCombustible{
    @PrimaryGeneratedColumn()
    tipoCombustibleId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

