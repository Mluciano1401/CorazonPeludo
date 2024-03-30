import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'vehiculo', name: 'tipocombustible' })
export class TipoCombustible{
    @PrimaryGeneratedColumn()
    tipoCombustibleId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

