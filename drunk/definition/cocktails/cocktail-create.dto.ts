import { Expose } from "class-transformer";
import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CocktailCreateDTO {
  @IsMongoId()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  name: string;

  @IsNumber()
  @Expose()
  @Min(0)
  price: number;

  @IsString()
  @Expose()
  alcohol: string;

  @IsString()
  @Expose()
  ingredients: string;

  @IsString()
  @Expose()
  @IsOptional()
  description: string;
}
