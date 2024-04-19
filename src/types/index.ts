import { z } from "zod";
import { CryptoResponse, CryptoSchema, CryptoInfo, CryptoInfoResponse } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CryptoSchema>
export type Crypto = z.infer<typeof CryptoResponse>
export type CryptoInfo = z.infer<typeof CryptoInfo>
export type CryptoSchema = z.infer<typeof CryptoInfoResponse>