import {
  IsOptional,
  IsNumber,
  IsBoolean,
  IsISO8601,
  IsInt,
  Min,
  Max,
  IsString,
} from 'class-validator';

export class Users_typesDto {
 
  @IsString()
  email: string;
  @IsString()
  name: string;
}
