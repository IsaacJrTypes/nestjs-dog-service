import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogDto } from '../dto/create-dog.dto';
import { Dogs } from '../entity/dogs.entity';

type messageResponse = {
    msg: string;
    removed: Dogs
}
@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dogs) private readonly dogsRepository: Repository<Dogs>){}

    async createEntry(createDogDto: CreateDogDto): Promise<Dogs> {
        const dog:Dogs = new Dogs();
        dog.name = createDogDto.name
        return this.dogsRepository.save(dog)
    }

    async findAllDogs(): Promise<Dogs[]> {
        return this.dogsRepository.find();
    }

    async findByID(id:number) :Promise<Dogs> {
        const found = await this.dogsRepository.findOneBy({id})
        if (found == null) {
            throw new HttpException(
                `No dog found under id: ${id}`,
                HttpStatus.NOT_FOUND
            )
        }
        return found
    }

    async update(id:number, dog:Dogs): Promise<Dogs> {
        let found = await this.dogsRepository.findOneBy({id})
        if (found == null) {
            throw new HttpException(
                `Cant update invalid ID: ${id}`,
                HttpStatus.NOT_FOUND
            )
        }
        await this.dogsRepository.update(id,dog)
        return this.dogsRepository.findOneBy({id})
    }

    async remove(id:number): Promise<messageResponse> {
        const toBeDeleted = await this.dogsRepository.findOneBy({id})
        if (toBeDeleted == null) {
            throw new HttpException(
                `No dog found under id: ${id}`,
                HttpStatus.NOT_FOUND
            )
        }
        await this.dogsRepository.delete(id)
        return {msg:"success", removed: toBeDeleted}
        }

}