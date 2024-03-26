import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateusuarioDto } from './dto/create-usuario.dto';
import { UpdateusuarioDto } from './dto/update-usuario.dto';
import { usuario, usuarioDocument } from './schema/usuario.schema';
import { Model } from 'mongoose';

@Injectable()
export class usuarioService {
  constructor(@InjectModel(usuario.name) private usuarioModule: Model<usuarioDocument>){

  }
  async create(createusuarioDto: CreateusuarioDto) {
    const usuarioCreated = await this.usuarioModule.create(createusuarioDto);
    return usuarioCreated;
  }

  async findAll(): Promise<usuario[]> {
    const usuariolist = await this.usuarioModule.find({});
    return usuariolist;
  }

  async findOne(id: string):Promise<usuario> {
    const usuario = await this.usuarioModule.findOne({_id:id});
    return usuario;
  }

  update(id: string, updateusuarioDto: UpdateusuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: string) {
    return `This action removes a #${id} usuario`;
  }
}
