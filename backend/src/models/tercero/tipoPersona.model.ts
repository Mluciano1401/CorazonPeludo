import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({ schema: 'tercero', name: 'tipoPersona' })
export class TipoPersona {
    @PrimaryGeneratedColumn()
    tipoPersonaId: number;

    @Column({ nullable: false })
    descripcion: string;

  @Column({ nullable: false,  default: new Date() })
    fechaModificacion: Date;

  @Column({ nullable: false, default: true })
    status:boolean;
}

