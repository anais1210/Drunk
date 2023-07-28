import * as express from "express";
import { ServiceRegistry } from "../mongoose";
import { WalletController, TransactionController } from "./controllers";

export function startServer(serviceRegistry: ServiceRegistry): void {
  const app = express();
  app.use(express.json()); //permet de lire le body des request en JSON
  const walletController = new WalletController(serviceRegistry);
  const transactionController = new TransactionController(serviceRegistry);
  app.use("/wallet", walletController.buildRoutes());
  app.use("/transaction", transactionController.buildRoutes());
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  });
}
// curl -X POST https://localhost:3001/account/subscribe
