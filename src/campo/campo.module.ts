import { Module } from '@nestjs/common';
import { CampoController } from './campo.controller';

@Module({
  controllers: [CampoController],
})
export class CampoModule {}
