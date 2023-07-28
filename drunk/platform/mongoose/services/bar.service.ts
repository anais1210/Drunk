// import { IAccount, IBar } from "@anais1210/eth-lib";
import { IBar } from "../../../../drunk-lib/definitions";
import { Mongoose, Model } from "mongoose";
import { BarCreateDTO, BarUpdateDTO } from "../../../definition";
import { BarSchema } from "../schema";

export class BarService {
  readonly model: Model<IBar>;
  constructor(connection: Mongoose) {
    this.model = connection.model<IBar>("Bar", BarSchema);
  }

  async create(dto: BarCreateDTO): Promise<IBar> {
    return this.model.create({ ...dto });
  }

  async getAll(name: string | IBar): Promise<IBar[]> {
    return this.model.find({ name }).exec();
  }
  async deleteBar(barId: string): Promise<IBar | null> {
    return this.model.findOneAndDelete({ _id: barId }).exec();
  }
  async updateWallet(dto: BarUpdateDTO, barId: string): Promise<IBar | null> {
    return this.model
      .findOneAndUpdate({ _id: barId }, dto, {
        returnOriginal: false,
      })
      .exec();
  }
  async find(barId: string): Promise<IBar | null> {
    return this.model.findById(barId).exec();
  }
}
