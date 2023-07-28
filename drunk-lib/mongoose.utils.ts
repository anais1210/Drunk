import { Mongoose, connect } from "mongoose";

export class MongooseUtils {
  public static connect(): Promise<Mongoose> {
    return connect(process.env.MONGO_URI, {
      auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSSWORD,
      },
      authSource: "admin", // Collection admin qui gere compte utilisateur
      autoCreate: true, // Mongoose va créer les tables et les databases
    });
  }

  public static isDuplicateKeyError(err: Error): boolean {
    return err.name === "MongoServerError" && err["code"] === 11000;
  }
}
