import { ICocktail } from "./cocktail.interface";
import { ILocation } from "./location.interface";

export interface IBar {
  id: string;
  location: ILocation;
  address: number;
  cocktails: (string | ICocktail)[];
}
