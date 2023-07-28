// import { IBar } from "@anais1210/drunk-lib";
import { IBar } from "../../../drunk-lib/definitions";

import axios, { Axios, AxiosResponse } from "axios";
export class BarService {
  readonly instance: Axios;
  private static shared: BarService;
  private constructor() {}

  public static getShared(): BarService {
    if (this.shared === undefined) {
      this.shared = new BarService();
    }
    return this.shared;
  }

  public async getbar(): Promise<IBar[] | null> {
    try {
      const response: AxiosResponse<IBar[]> = await this.instance.get(
        "/cocktail/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  public async addBar(cocktail: any): Promise<IBar | null> {
    try {
      const response: AxiosResponse<IBar> = await this.instance.post(
        "/cocktail/add",
        cocktail
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async updateBar(id: string, cocktail: any): Promise<IBar | null> {
    try {
      const response: AxiosResponse<IBar> = await this.instance.put(
        `/cocktail/update/${id}`,
        cocktail
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  public async deleteBar(id: string, cocktail: any): Promise<IBar | null> {
    try {
      const response: AxiosResponse<IBar> = await this.instance.delete(
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
