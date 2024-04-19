import { z } from "zod";

export const CryptoSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoResponse = z.array(
  z.object({
    CoinInfo: z.object({
      FullName: z.string(),
      Name: z.string(),
    }),
  })
);

export const CryptoInfo = z.object({
  currency: z.string(),
  crypto: z.string(),
});

export const CryptoInfoResponse = z.object({
  PRICE: z.string(),
  HIGH24HOUR: z.string(),
  LOW24HOUR: z.string(),
  CHANGE24HOUR: z.string(),
  LASTUPDATE: z.string(),
  IMAGEURL: z.string(),
});
