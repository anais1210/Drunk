import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CocktailUpdateDTO {
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
}
