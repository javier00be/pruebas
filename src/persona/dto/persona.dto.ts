import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  apellido_paterno: string;

  @IsString()
  apellido_materno: string;

  @IsString()
  alias: string;
}
