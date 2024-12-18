import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Persona {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido_paterno: string;

  @Prop({ required: true })
  apellido_materno: string;

  @Prop({ required: true })
  alias: string;
}

export const PersonaSchema = SchemaFactory.createForClass(Persona);
