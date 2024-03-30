import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'admin', name: 'tipoUsuario' })
export class TipoUsuario {
    @PrimaryGeneratedColumn()
    tipoUsuarioId: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}