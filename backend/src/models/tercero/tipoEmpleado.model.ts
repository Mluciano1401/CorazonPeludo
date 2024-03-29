import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoEmpleado{
    @PrimaryGeneratedColumn()
    tipoEmpleadoId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

