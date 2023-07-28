import { Expose } from "class-transformer";
import { IsMongoId, IsOptional, IsString } from "class-validator";

export class BarCreateDTO {
  @IsString()
  @Expose()
  location: string;

  @IsString()
  @Expose()
  address: string;

  @IsString()
  @Expose()
  @IsOptional()
  alcohol: string;

  @IsString()
  @Expose()
  cocktail: string[];
}
