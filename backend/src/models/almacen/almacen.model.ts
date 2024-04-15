import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";

@Entity( )
export class Almacen{
    @PrimaryGeneratedColumn()
    almacenId: number;

    @Column({ nullable: false, default:0 })
    capacidad: number;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

