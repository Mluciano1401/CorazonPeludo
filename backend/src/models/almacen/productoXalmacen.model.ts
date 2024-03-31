import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Producto } from "./producto.model";
import { Almacen } from "./almacen.model";



@Entity( )
export class productoXalmacen{
    @PrimaryColumn()
    @OneToOne(() => Producto)
    @JoinColumn()
    producto: Producto;

    @PrimaryColumn()
    @OneToOne(() => Almacen)
    @JoinColumn()
    almacen: Almacen;

    @Column({ nullable: false,default: 0  })
    existencia: number;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

