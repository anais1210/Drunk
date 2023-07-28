import { ObjectId } from "mongoose";

export interface ICocktail {
  id: ObjectId;
  name: string;
  price: number;
  alcohol: string;
  ingredients: string;
  description?: string;
}
