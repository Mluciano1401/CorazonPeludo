import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoTarea } from "./tipoTarea.model";
import { Complejidad } from "./complejidad.model";

@Entity( )
export class Tarea{
    @PrimaryGeneratedColumn()
    tareaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @OneToOne(()=> TipoTarea)
    @JoinColumn()
    tipoTarea: TipoTarea;

    @OneToOne(()=> Complejidad)
    @JoinColumn()
    complejidad: Complejidad;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

