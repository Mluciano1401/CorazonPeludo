import { NivelUrgencia } from './../miscelaneo/nivelUrgencia.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoRecurso } from "../miscelaneo/tipoRecurso.model";
import { Tarea } from "../miscelaneo/tarea.model";
import { Empleado } from "../tercero/empleado.model";
import { Direccion } from "../miscelaneo/direccion.model";
import { Estado } from '../miscelaneo/estado.model';

@Entity( )
export class AsignacionTarea{
    @PrimaryGeneratedColumn()
    asignacionTareaId: number;

    @OneToOne(() => Tarea)
    @JoinColumn()
    tarea: Tarea;

    @OneToOne(() => Empleado)
    @JoinColumn()
    empleado: Empleado;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaLimite: Date;

    @OneToOne(()=> Estado)
    @JoinColumn()
    estado: Estado;

    @OneToOne(()=> Direccion)
    @JoinColumn()
    ubicacion: Direccion;

    @OneToOne(()=> NivelUrgencia )
    @JoinColumn()
    nivelUrgencia: NivelUrgencia ;

    @OneToOne(() => TipoRecurso)
    @JoinColumn()
    tipoRecurso: TipoRecurso;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

