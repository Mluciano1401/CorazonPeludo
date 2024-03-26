import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatepersonaDto } from './dto/create-persona.dto';
import { UpdatepersonaDto } from './dto/update-persona.dto';
import { persona, personaDocument } from './schema/persona.schema';
import { Model } from 'mongoose';

@Injectable()
export class personaService {
  constructor(@InjectModel(persona.name) private personaModule: Model<personaDocument>){

  }
  async create(createpersonaDto: CreatepersonaDto) {
    const personaCreated = await this.personaModule.create(createpersonaDto);
    return personaCreated;
  }

  async findAll(): Promise<persona[]> {
    const personalist = await this.personaModule.find({});
    return personalist;
  }

  async findOne(id: string):Promise<persona> {
    const persona = await this.personaModule.findOne({_id:id});
    return persona;
  }

  update(id: string, updatepersonaDto: UpdatepersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: string) {
    return `This action removes a #${id} persona`;
  }
}
