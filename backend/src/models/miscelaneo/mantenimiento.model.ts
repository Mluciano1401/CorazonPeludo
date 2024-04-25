import { TipoMantenimiento } from 'src/models/miscelaneo/tipoMantenimiento.model';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity( )
export class Mantenimiento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    descripcion: string;

    @ManyToOne(()=>TipoMantenimiento)
    @JoinColumn()
    tipoMantenimiento: TipoMantenimiento;

  @Column({ nullable: false})
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

