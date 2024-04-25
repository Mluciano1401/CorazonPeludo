import { NivelUrgencia } from './../miscelaneo/nivelUrgencia.model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoRecurso } from "../miscelaneo/tipoRecurso.model";
import { Tarea } from "../miscelaneo/tarea.model";
import { Empleado } from "../tercero/empleado.model";
import { Direccion } from "../miscelaneo/direccion.model";
import { Estado } from '../miscelaneo/estado.model';

@Entity( )
export class AsignacionTarea{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Tarea)
    @JoinColumn()
    tarea: Tarea;

    @ManyToOne(() => Empleado)
    @JoinColumn()
    empleado: Empleado;

    @Column({ nullable: true})
    fechaInicio: Date;

    @Column({ nullable: true})
    fechaLimite: Date;

    @ManyToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @ManyToOne(()=> Direccion)
    @JoinColumn()
    ubicacion: Direccion;

    @ManyToOne(()=> NivelUrgencia )
    @JoinColumn()
    nivelUrgencia: NivelUrgencia ;

    @ManyToOne(() => TipoRecurso)
    @JoinColumn()
    tipoRecurso: TipoRecurso;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

