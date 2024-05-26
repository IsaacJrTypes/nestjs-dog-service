import { Body, Controller,Post,Patch,Param,Delete,Get,UsePipes,ValidationPipe } from '@nestjs/common';
import { CreateDogDto } from '../dto/create-dog.dto';
import { DogsService } from '../service/dogs.service';
import { UpdateDogDto } from '../dto/update-dog.dto';

@Controller('dogs')
@UsePipes(new ValidationPipe())
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

    @Patch(':id')
    update(@Param('id') id:number,@Body() updateDogDto: UpdateDogDto){
        console.log(`id:${id}:`,updateDogDto)
        return this.dogService.update(+id,updateDogDto)
    }

    @Delete(':id')
    remove(@Param('id') id:number) {
        return this.dogService.remove(+id)
    }
}
