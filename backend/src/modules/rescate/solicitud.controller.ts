import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { solicitudService } from './solicitud.service';
import { CreatesolicitudDto } from './dto/create-solicitud.dto';
import { UpdatesolicitudDto } from './dto/update-solicitud.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('solicitud')
@Controller('solicitud')
export class solicitudController {
  constructor(private readonly solicitudService: solicitudService) {}

  @Post()
  create(@Body() createsolicitudDto: CreatesolicitudDto) {
    return this.solicitudService.create(createsolicitudDto);
  }

  @Get()
  findAll() {
    return this.solicitudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatesolicitudDto: UpdatesolicitudDto) {
    return this.solicitudService.update(id, updatesolicitudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudService.remove(id);
  }
}
