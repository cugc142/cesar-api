import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET || "default-secret";
// usamos string | number (ej: "8h", "1d" o 3600)
const expiresIn = (process.env.JWT_EXPIRES_IN || "8h") as SignOptions['expiresIn'];

export function signToken(payload: object): string {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secret, options);
}

export function verifyToken(token: string): any {
  return jwt.verify(token, secret);
}
