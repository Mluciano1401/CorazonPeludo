import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { TipoRecurso } from "../miscelaneo/tipoRecurso.model";
import { Producto } from "../almacen/producto.model";
import { AsignacionTarea } from "./asignacionTareas.model";
import { Estado } from "../miscelaneo/estado.model";

@Entity( )
export class AsignacionRecursos{
    @PrimaryColumn()
     id: number;
      @ManyToOne(() => AsignacionTarea)
    @JoinColumn()
    tarea: AsignacionTarea;

      @ManyToOne(() => Producto)
    @JoinColumn()
    producto: Producto;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @Column({ nullable: false })
    fecha: Date;

    @ManyToOne(() => TipoRecurso)
    @JoinColumn()
    tipoRecurso: TipoRecurso;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

