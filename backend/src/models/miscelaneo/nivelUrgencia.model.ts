import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( )
export class NivelUrgencia{
    @PrimaryGeneratedColumn()
    nivelUrgenciaId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

