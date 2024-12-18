import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaModule } from './persona/persona.module';
import { CampoModule } from './campo/campo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://benjhamycru12:javier123456@cluster1.is2mi.mongodb.net/depormatch?retryWrites=true&w=majority&appName=Cluster1',
    ),
    PersonaModule,
    CampoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
