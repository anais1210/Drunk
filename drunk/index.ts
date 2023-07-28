import "reflect-metadata"; // permet d'utiliser les décorateurs
import { config } from "dotenv";
import { startServer } from "./platform/express";
config(); // charger le fichier .env partout dans l'app

import { ServiceRegistry } from "./platform/mongoose";
import { MongooseUtils } from "@anais1210/drunk-lib";

async function main() {
  const connection = await MongooseUtils.connect();
  const serviceRegistry = new ServiceRegistry(connection);
  startServer(serviceRegistry);
}

main().catch(console.error);
