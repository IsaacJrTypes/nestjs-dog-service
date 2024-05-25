import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), DogsModule],
})
export class AppModule {}
