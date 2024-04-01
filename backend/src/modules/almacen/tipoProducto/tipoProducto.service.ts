import { Injectable } from '@nestjs/common';
import { TipoProducto } from '../../../models/almacen/tipoProducto.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TipoProductoService {
  _TipoProductoRepository: Repository<any> | any;
  constructor(
   @InjectRepository(TipoProducto) private TipoProductoRepository: Repository<TipoProducto>
  ) {
    this._TipoProductoRepository = TipoProductoRepository;
  }
  async findAll():Promise<TipoProducto[]>{
    return await this._TipoProductoRepository.findBy({status: true});
  }
  async findById(id:number):Promise<TipoProducto>{
    return await this._TipoProductoRepository.findOneOrFail(id,{where:{status:true}});
  }
  async create(user: TipoProducto):Promise<TipoProducto> {
    return await this._TipoProductoRepository.save(user);
  }
  async update(id: number, user: TipoProducto): Promise<void> {
    return await this._TipoProductoRepository.update(id, user);
  }
  async delete(id: number): Promise<string> {
    await this._TipoProductoRepository.softDelete(id);
    return 'Ok';
  }
}