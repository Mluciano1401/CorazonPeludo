import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( )
export class TipoUsuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: false, default: new Date().getDate()})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}