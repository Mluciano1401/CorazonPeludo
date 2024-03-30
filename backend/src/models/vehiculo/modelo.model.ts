import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'vehiculo', name: 'modelo' })
export class Modelo {
    @PrimaryGeneratedColumn()
    modeloId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}