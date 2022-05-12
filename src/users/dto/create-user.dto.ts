import {IsEmail, isString, IsString, MinLength} from 'class-validator'


export class CreateUserDto {
    @IsEmail()
    email:string;

    @IsString()
    name:string;

    @IsString()
    @MinLength(6)
    password:string;



}
