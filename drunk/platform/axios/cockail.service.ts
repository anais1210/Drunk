// import { ICocktail } from "@anais1210/drunk-lib";
import { ICocktail } from "../../../drunk-lib/definitions";

import axios, { Axios, AxiosResponse } from "axios";
export class CocktailService {
  readonly instance: Axios;
  private static shared: CocktailService;
  private constructor() {}

  public static getShared(): CocktailService {
    if (this.shared === undefined) {
      this.shared = new CocktailService();
    }
    return this.shared;
  }

  public async getCocktail(): Promise<ICocktail[] | null> {
    try {
      const response: AxiosResponse<ICocktail[]> = await this.instance.get(
        "/cocktail/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  public async addCocktail(cocktail: any): Promise<ICocktail | null> {
    try {
      const response: AxiosResponse<ICocktail> = await this.instance.post(
        "/cocktail/add",
        cocktail
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async updateCocktail(
    id: string,
    cocktail: any
  ): Promise<ICocktail | null> {
    try {
      const response: AxiosResponse<ICocktail> = await this.instance.put(
        `/cocktail/update/${id}`,
        cocktail
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  public async deleteCocktail(
    id: string,
    cocktail: any
  ): Promise<ICocktail | null> {
    try {
      const response: AxiosResponse<ICocktail> = await this.instance.delete(
        `/cocktail/delete/${id}`,
        cocktail
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
