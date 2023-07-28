import axios, { Axios, AxiosResponse } from "axios";
// import { IBar } from "@anais1210/drunk-lib";
import { IBar } from "../../drunk-lib/definitions";

export class BarService {
  readonly instance: Axios;
  private static shared: BarService;

  public static getShared(): BarService {
    if (this.shared === undefined) {
      this.shared = new BarService();
    }
    return this.shared;
  }

  public async getBarById(id: string): Promise<IBar | null> {
    try {
      const response: AxiosResponse<IBar> = await this.instance.get(
        `/bar/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  public async getBars(): Promise<IBar[] | null> {
    try {
      const response: AxiosResponse<IBar[]> = await this.instance.get(
        "/bar/all"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
