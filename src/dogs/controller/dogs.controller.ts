import { Body, Controller,Post,Patch,Param,Delete,Get } from '@nestjs/common';
import { CreateDogDto } from '../dto/create-dog.dto';
import { DogsService } from '../service/dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogService:DogsService) {}
    // Post
    @Post()
    create(@Body() createDogDto:CreateDogDto) {
        return this.dogService.createEntry(createDogDto)
    }

    @Get()
    findAll() {
        return this.dogService.findAllDogs();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.dogService.findByID(+id)
    }
}
