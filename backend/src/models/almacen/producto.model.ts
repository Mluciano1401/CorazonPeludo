import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from "../miscelaneo/marca.model";

@Entity({ schema: 'almacen', name: 'producto' })
export class Producto {
    @PrimaryGeneratedColumn()
    productoId: number;

    @Column({ nullable: false })
    nombre: string;

    @Column()
    lote: string;

    @Column()
    tipoProducto:number;

    @Column()
    costo:number;

    @ManyToOne(()=> Marca)
    @JoinColumn()
    marca: Marca;

    @Column()
    fechaVencimiento: Date;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}