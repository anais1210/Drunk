import axios, { Axios, AxiosResponse } from "axios";
// import { ICocktail } from "@anais1210/drunk-lib";
import { ICocktail } from "../../drunk-lib/definitions";

export class BarService {
  readonly instance: Axios;
  private static shared: BarService;

  public static getShared(): BarService {
    if (this.shared === undefined) {
      this.shared = new BarService();
    }
    return this.shared;
  }

  public async getCocktailById(id: string): Promise<ICocktail | null> {
    try {
      const response: AxiosResponse<ICocktail> = await this.instance.get(
        `/bar/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  public async getBars(): Promise<ICocktail[] | null> {
    try {
      const response: AxiosResponse<ICocktail[]> = await this.instance.get(
        "/bar/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
