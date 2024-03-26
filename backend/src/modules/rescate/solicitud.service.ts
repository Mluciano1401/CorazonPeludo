import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatesolicitudDto } from './dto/create-solicitud.dto';
import { UpdatesolicitudDto } from './dto/update-solicitud.dto';
import { solicitud, solicitudDocument } from './schema/solicitud.schema';
import { Model } from 'mongoose';

@Injectable()
export class solicitudService {
  constructor(@InjectModel(solicitud.name) private solicitudModule: Model<solicitudDocument>){

  }
  async create(createsolicitudDto: CreatesolicitudDto) {
    const solicitudCreated = await this.solicitudModule.create(createsolicitudDto);
    return solicitudCreated;
  }

  async findAll(): Promise<solicitud[]> {
    const solicitudlist = await this.solicitudModule.find({});
    return solicitudlist;
  }

  async findOne(id: string):Promise<solicitud> {
    const solicitud = await this.solicitudModule.findOne({_id:id});
    return solicitud;
  }

  update(id: string, updatesolicitudDto: UpdatesolicitudDto) {
    return `This action updates a #${id} solicitud`;
  }

  remove(id: string) {
    return `This action removes a #${id} solicitud`;
  }
}
