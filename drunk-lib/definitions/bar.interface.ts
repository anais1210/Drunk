import { ObjectId } from "mongoose";
import { ICocktail } from "./cocktail.interface";
interface ILocation {
  id: ObjectId;

  lon: string;
  lat: string;
}
export interface IBar {
  id: ObjectId;
  location: ILocation;
  address: number;
  cocktails?: (string | ICocktail)[];
}
