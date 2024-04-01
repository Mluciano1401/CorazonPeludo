import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { TipoRecurso } from "../miscelaneo/tipoRecurso.model";
import { Producto } from "../almacen/producto.model";
import { AsignacionTarea } from "./asignacionTareas.model";
import { Estado } from "../miscelaneo/estado.model";

@Entity( )
export class AsignacionRecursos{
    @PrimaryColumn()
     id: number;
      @OneToOne(() => AsignacionTarea)
    @JoinColumn()
    tarea: AsignacionTarea;

      @OneToOne(() => Producto)
    @JoinColumn()
    producto: Producto;

    @OneToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false })
    fecha: Date;

    @OneToOne(() => TipoRecurso)
    @JoinColumn()
    tipoRecurso: TipoRecurso;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

