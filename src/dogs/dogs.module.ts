import { Module } from '@nestjs/common';
import { DogsController } from './controller/dogs.controller';
import { DogsService } from './service/dogs.service';
import { Dogs } from './entity/dogs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dogs])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
