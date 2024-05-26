import{IsString, MinLength, IsNotEmpty}from 'class-validator'

export class UpdateDogDto {
    @IsString()
    @MinLength(2, {message:"name must have at least 2 characters"})
    @IsNotEmpty()
    name:string;
}