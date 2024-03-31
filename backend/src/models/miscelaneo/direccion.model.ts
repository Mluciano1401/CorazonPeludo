import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( )
export class Direccion{
    @PrimaryGeneratedColumn()
    direccionId: number;

    @Column({ nullable: false })
    calle: string;

    @Column({ nullable: false })
    sector: string;

    @Column({ nullable: false})
    fechaModificacion: Date;

    @Column({ nullable: false, default: true })
    status:boolean;
}

