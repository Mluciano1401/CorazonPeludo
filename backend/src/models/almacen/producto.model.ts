import { TipoProducto } from './tipoProducto.model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from "../miscelaneo/marca.model";

@Entity( )
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nombre: string;

    @Column({ nullable: true})
    lote: string;

    @ManyToOne(()=> TipoProducto)
    @JoinColumn()
    tipoProducto: TipoProducto;

    @Column({ nullable: true})
    costo:number;

    @ManyToOne(()=> Marca)
    @JoinColumn()
    marca: Marca;

    @Column({ nullable: true})
    fechaVencimiento: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}