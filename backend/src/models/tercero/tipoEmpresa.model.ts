import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class TipoPersona {
    @PrimaryGeneratedColumn()
    tipoPersonaId: number;

    @Column()
    descripcion: string;

    @Column()
    fechaModificacion: Date;

    @Column()
    status:boolean;
}

