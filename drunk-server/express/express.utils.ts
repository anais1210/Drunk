import { Request } from "express";

export class ExpressUtils {
  static extractToken(req: Request): string | undefined {
    const authorization = req.header("authorization");
    if (!authorization) {
      return;
    }
    const parts = authorization.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer" || parts[1].length !== 32) {
      return;
    }
    return parts[1];
  }
}
