import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'miscelaneo', name: 'tipoTarea' })
export class TipoTarea{
    @PrimaryGeneratedColumn()
    tipoTareaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

