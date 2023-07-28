import { Schema, SchemaTypes } from "mongoose";
// import { ICocktail, IWallet } from "@anais1210/eth-lib";
import { IBar } from "../../../../drunk-lib/definitions";

export const BarSchema = new Schema<IBar>(
  {
    id: {
      type: SchemaTypes.ObjectId,
      unique: true,
    },
    location: {
      type: SchemaTypes.String,
      required: true,
    },
    address: {
      type: SchemaTypes.Number,
    },
    cocktails: {
      type: SchemaTypes.String,
      ref: "Cocktail",
    },
  },
  {
    versionKey: false,
    collection: "transactions", // nom de la base
    timestamps: true, // permet d'ajouter les champs createAt & updateAt
  }
);

export type BarDocuments = Document & IBar; // c'est un modèle
