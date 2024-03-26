import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { enfermedadService } from './enfermedad.service';
import { CreateenfermedadDto } from './dto/create-enfermedad.dto';
import { UpdateenfermedadDto } from './dto/update-enfermedad.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('enfermedad')
@Controller('enfermedad')
export class enfermedadController {
  constructor(private readonly enfermedadService: enfermedadService) {}

  @Post()
  create(@Body() createenfermedadDto: CreateenfermedadDto) {
    return this.enfermedadService.create(createenfermedadDto);
  }

  @Get()
  findAll() {
    return this.enfermedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfermedadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateenfermedadDto: UpdateenfermedadDto) {
    return this.enfermedadService.update(id, updateenfermedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermedadService.remove(id);
  }
}
