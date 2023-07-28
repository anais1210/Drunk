import { Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export class ValidationUtils {
  static async createAndValidateDTO<DTO extends object>(
    constructor: new (...args: any[]) => DTO,
    raw: any,
    res: Response
  ): Promise<DTO | undefined> {
    const dto = plainToInstance(constructor, raw, {
      // enelever les champrs supplémentaires de l'objet
      //garde uniquemet les champ avec les @Expose
      excludeExtraneousValues: true,
    });
    const errors = await validate(dto);
    if (errors.length > 0) {
      const errorMessage = {};
      for (let validationError of errors) {
        errorMessage[validationError.property] = validationError.constraints;
      }
      res.status(400).json(errorMessage);
      return;
    }
    return dto;
  }
}
