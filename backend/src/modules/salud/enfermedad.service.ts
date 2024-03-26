import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateenfermedadDto } from './dto/create-enfermedad.dto';
import { UpdateenfermedadDto } from './dto/update-enfermedad.dto';
import { enfermedad, enfermedadDocument } from './schema/enfermedad.schema';
import { Model } from 'mongoose';

@Injectable()
export class enfermedadService {
  constructor(@InjectModel(enfermedad.name) private enfermedadModule: Model<enfermedadDocument>){

  }
  async create(createenfermedadDto: CreateenfermedadDto) {
    const enfermedadCreated = await this.enfermedadModule.create(createenfermedadDto);
    return enfermedadCreated;
  }

  async findAll(): Promise<enfermedad[]> {
    const enfermedadlist = await this.enfermedadModule.find({});
    return enfermedadlist;
  }

  async findOne(id: string):Promise<enfermedad> {
    const enfermedad = await this.enfermedadModule.findOne({_id:id});
    return enfermedad;
  }

  update(id: string, updateenfermedadDto: UpdateenfermedadDto) {
    return `This action updates a #${id} enfermedad`;
  }

  remove(id: string) {
    return `This action removes a #${id} enfermedad`;
  }
}
