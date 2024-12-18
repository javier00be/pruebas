import { PersonaService } from './persona.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePersonaDto } from './dto/persona.dto';

@Controller('persona')
export class PersonaController {
  constructor(private personaService: PersonaService) {}

  @Post()
  async insertarPersona(
    @Body(new ValidationPipe()) newPersona: CreatePersonaDto,
  ) {
    console.log(newPersona);
    return this.personaService.insertarPersona(newPersona);
  }

  @Put()
  async actualizarPersona(
    @Param() id: string,
    @Body(new ValidationPipe()) Persona: CreatePersonaDto,
  ) {
    return this.personaService.actualizarPersona(id, Persona);
  }

  @Get()
  async obtenerPersonas() {
    return this.personaService.obtenerPersonas();
  }

  @Get(':id')
  async obtenerPersona(@Param('id') id: string) {
    return this.personaService.obtenerPersona(id);
  }

  @Delete(':id')
  async borrarPersona(@Param('id') id: string) {
    return this.personaService.borrarPersona(id);
  }
}
