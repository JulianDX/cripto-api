import axios from "axios";
import { CryptoInfoResponse, CryptoResponse } from "../schema/crypto-schema";
import { CryptoInfo } from "../types";

export const callApi = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  try {
    const {
      data: { Data },
    } = await axios(url);
    const verifyData = CryptoResponse.safeParse(Data);
    if (verifyData.success) {
      return verifyData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCryptoInfo = async (cryptoData: CryptoInfo) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoData.crypto}&tsyms=${cryptoData.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);
  const res = DISPLAY[cryptoData.crypto][cryptoData.currency];
  const verifyData = CryptoInfoResponse.safeParse(res);
  if (verifyData.success) {
    return verifyData.data;
  }
};
