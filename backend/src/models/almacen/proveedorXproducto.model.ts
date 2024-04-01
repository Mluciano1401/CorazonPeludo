import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.model";
import { Proveedor } from "./proveedor.model";



@Entity( )
export class proveedorXproducto{
  @PrimaryColumn()
  id: number;
      @OneToOne(() => Proveedor)
    @JoinColumn()
    proveedor: Proveedor;

      @OneToOne(() => Producto)
    @JoinColumn()
    producto: Producto;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

