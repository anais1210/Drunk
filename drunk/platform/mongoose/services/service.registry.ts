import { Mongoose } from "mongoose";
import { CocktailService, BarService } from "../../axios/cockail.service";

export class ServiceRegistry {
  readonly cocktailService;
  readonly barService;
  constructor(connection: Mongoose) {
    this.cocktailService = new CocktailService(connection);
    this.barService = new BarService(connection);
  }
}
