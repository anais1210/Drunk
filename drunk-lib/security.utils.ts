import { TransformFnParams } from "class-transformer";
import * as crypto from "crypto";

export class SecurityUtils {
  static sha512(str: string): string {
    return crypto.createHash("sha512").update(str).digest("hex");
  }
  static generateToken(length: number): string {
    return crypto.randomBytes(length / 2).toString("hex");
  }
}
export function passwordTransformerHandler(
  params: TransformFnParams
): string | undefined {
  if (typeof params.value === "string" && params.value.length > 8) {
    return SecurityUtils.sha512(params.value);
  }
  return undefined;
}
