import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'vehiculo', name: 'tipoVehiculo' })
export class TipoVehiculo {
    @PrimaryGeneratedColumn()
    tipoVehiculoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

