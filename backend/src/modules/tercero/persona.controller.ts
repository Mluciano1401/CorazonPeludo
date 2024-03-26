import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { personaService } from './persona.service';
import { CreatepersonaDto } from './dto/create-persona.dto';
import { UpdatepersonaDto } from './dto/update-persona.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('persona')
@Controller('persona')
export class personaController {
  constructor(private readonly personaService: personaService) {}

  @Post()
  create(@Body() createpersonaDto: CreatepersonaDto) {
    return this.personaService.create(createpersonaDto);
  }

  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatepersonaDto: UpdatepersonaDto) {
    return this.personaService.update(id, updatepersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(id);
  }
}
