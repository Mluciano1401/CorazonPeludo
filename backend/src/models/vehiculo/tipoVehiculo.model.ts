import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoVehiculo {
    @PrimaryGeneratedColumn()
    tipoVehiculoId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

