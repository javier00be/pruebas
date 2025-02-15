import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonaSchema } from './schemas/persona.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Persona.name,
        schema: PersonaSchema,
      },
    ]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
