import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { registerService } from './register.service';
import { CreateregisterDto } from './dto/create-register.dto';
import { UpdateregisterDto } from './dto/update-register.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('register')
@Controller('register')
export class registerController {
  constructor(private readonly registerService: registerService) {}

  @Post()
  create(@Body() createregisterDto: CreateregisterDto) {
    return this.registerService.create(createregisterDto);
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateregisterDto: UpdateregisterDto) {
    return this.registerService.update(id, updateregisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerService.remove(id);
  }
}
