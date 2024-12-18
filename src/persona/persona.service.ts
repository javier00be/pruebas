import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Persona } from './schemas/persona.schema';
import { Model } from 'mongoose';
import { CreatePersonaDto } from './dto/persona.dto';
@Injectable()
export class PersonaService {
  constructor(
    @InjectModel(Persona.name) private personaModel: Model<Persona>,
  ) {}

  async insertarPersona(Persona: CreatePersonaDto) {
    const insertarPersona = new this.personaModel(Persona);
    return insertarPersona.save();
  }

  async actualizarPersona(id: string, Persona: CreatePersonaDto) {
    return this.personaModel.findByIdAndUpdate(id, Persona);
  }

  async obtenerPersonas() {
    return this.personaModel.find().exec();
  }

  async obtenerPersona(id: string) {
    return this.personaModel.findById(id).exec();
  }

  async borrarPersona(id: string) {
    return this.personaModel.findByIdAndDelete(id).exec();
  }
}
