import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTarea } from "./tipoTarea.model";
import { Complejidad } from "./complejidad.model";

@Entity( )
export class Tarea{
    @PrimaryGeneratedColumn()
    tareaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @ManyToOne(()=> TipoTarea)
    @JoinColumn()
    tipoTarea: TipoTarea;

    @ManyToOne(()=> Complejidad)
    @JoinColumn()
    complejidad: Complejidad;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

