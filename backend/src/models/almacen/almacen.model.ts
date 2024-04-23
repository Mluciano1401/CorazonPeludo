import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sucursal } from "../tercero/surcusal.model";
import { TipoAlmacen } from "./tipoAlmacen.model";

@Entity( )
export class Almacen{
    @PrimaryGeneratedColumn()
    almacenId: number;

    @Column({ nullable: false, default:0 })
    capacidad: number;

    @ManyToOne(()=> Sucursal)
    @JoinColumn()
    surcusal: Sucursal;
    
    @ManyToOne(()=> TipoAlmacen)
    @JoinColumn()
    tipoAlmacen: TipoAlmacen;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

