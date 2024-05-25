import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogDto } from '../dto/create-dog.dto';
import { Dogs } from '../entity/dogs.entity';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dogs) private readonly dogsRepository: Repository<Dogs>){}

    
    createEntry(createDogDto: CreateDogDto): Promise<Dogs> {
        const dog:Dogs = new Dogs();
        dog.name = createDogDto.name
        return this.dogsRepository.save(dog)
    }

    findAllDogs(): Promise<Dogs[]> {
        return this.dogsRepository.find();
    }

    findByID(id:number) :Promise<Dogs> {
        return this.dogsRepository.findOneBy({id})
    }
}