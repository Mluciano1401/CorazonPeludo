import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";

@Entity( )
export class Almacen{
    @PrimaryGeneratedColumn()
    almacenId: number;

    @Column({ nullable: false, default:0 })
    capacidad: number;

    @OneToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

