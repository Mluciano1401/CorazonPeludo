import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.model";
import { Proveedor } from "./proveedor.model";



@Entity( )
export class proveedorXproducto{
    @PrimaryColumn()
    @OneToOne(() => Proveedor)
    @JoinColumn()
    proveedor: Proveedor;

    @PrimaryColumn()
    @OneToOne(() => Producto)
    @JoinColumn()
    producto: Producto;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

