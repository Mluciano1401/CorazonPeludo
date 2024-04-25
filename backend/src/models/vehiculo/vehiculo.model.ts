import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoVehiculo } from "./tipoVehiculo.model";
import { TipoCombustible } from "./tipoCombustible.model";

@Entity( )
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(()=> TipoVehiculo)
    @JoinColumn()
    tipoVehiculo: TipoVehiculo;

    @Column({ nullable: true})
    numeroChasis: string;

    @Column({ nullable: false })
    placa: string;

    @Column({ nullable: true})
    es4x4:boolean;

    @Column({ nullable: true})
    anio:number;

    @OneToOne(()=> TipoCombustible)
    @JoinColumn()
    tipoCombustible: TipoCombustible;

    @Column({ nullable: true})
    kilometrajeMaximo:number;
    
    @Column({ nullable: true})
    capacidadPasajeros:number;

    @Column({ nullable: true})
    capacidadCarga:number;
    
    @Column({ nullable: true})
    color:string;

  @Column({ nullable: false})
    fechaModificacion: Date;
    
  @Column({ nullable: false, default: true })
    status:boolean;
}