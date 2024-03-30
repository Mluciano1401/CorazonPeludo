import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ schema: 'tercero', name: 'mantenimiento' })
export class Mantenimiento {
    @PrimaryGeneratedColumn()
    mantenimientoId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

