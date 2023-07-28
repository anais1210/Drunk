import { Router, Request, Response } from "express";
// import { ServiceRegistry } from "../../mongoose";
// import { ValidationUtils } from "@anais1210/eth-lib";
import { ValidationUtils } from "../../../../drunk-lib/validation.utils";
import { CocktailCreateDTO } from "../../../definition";
import { ServiceRegistry } from "../../mongoose/services/service.registry";

export class CocktailController {
  constructor(readonly serviceRegistry: ServiceRegistry) {}
  async createCocktail(req: Request, res: Response) {
    const dto = await ValidationUtils.createAndValidateDTO(
      CocktailCreateDTO,
      req.body,
      res
    );
    if (!dto) {
      return;
    }
    const cocktail = await this.serviceRegistry.cocktailService.find(dto.name);
    if (!cocktail) {
      return res.status(404).end();
    }
    res.json({ dto, cocktail });
  }

  buildRoutes(): Router {
    const router = Router();
    router.post("/", authMiddlleware(), this.createTransaction.bind(this));

    return router;
  }
}
