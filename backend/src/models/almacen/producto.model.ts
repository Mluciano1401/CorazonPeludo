import { TipoProducto } from './tipoProducto.model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from "../miscelaneo/marca.model";

@Entity( )
export class Producto {
    @PrimaryGeneratedColumn()
    productoId: number;

    @Column({ nullable: false })
    nombre: string;

    @Column()
    lote: string;

    @ManyToOne(()=> TipoProducto)
    @JoinColumn()
    tipoProducto: TipoProducto;

    @Column()
    costo:number;

    @ManyToOne(()=> Marca)
    @JoinColumn()
    marca: Marca;

    @Column()
    fechaVencimiento: Date;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}