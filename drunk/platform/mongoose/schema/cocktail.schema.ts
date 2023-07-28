import { Schema, SchemaTypes } from "mongoose";
// import { ICocktail, IWallet } from "@anais1210/eth-lib";
import { ICocktail } from "../../../../drunk-lib/definitions";
// import { IAccount } from "@anais1210/eth-lib/definitions/account.interface";

export const CocktailSchema = new Schema<ICocktail>(
  {
    id: {
      type: SchemaTypes.ObjectId,
      unique: true,
    },
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    price: {
      type: SchemaTypes.Number,
    },
    alcohol: {
      type: SchemaTypes.String,
      required: true,
    },
    ingredients: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
    },
  },
  {
    versionKey: false,
    collection: "transactions", // nom de la base
    timestamps: true, // permet d'ajouter les champs createAt & updateAt
  }
);

export type CocktailDocuments = Document & ICocktail; // c'est un modèle
