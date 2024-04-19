import { create } from "zustand";
import { Crypto, CryptoInfo, CryptoSchema } from "./types";
import { devtools } from "zustand/middleware";
import { callApi, getCryptoInfo } from "./services/CryptoServices";

interface CryptoState {
  spinner: boolean;
  cryptoData: Crypto;
  fetchCryptos: () => Promise<void>;
  fetchAPI: (cryptoData: CryptoInfo) => Promise<void>;
  cryptoInfo: CryptoSchema;
}

export const useCryptoStore = create<CryptoState>()(
  devtools((set) => ({
    spinner: false,
    cryptoData: [],
    cryptoInfo: Object(),
    fetchCryptos: async () => {
      const response = await callApi();
      set(() => ({
        cryptoData: response,
      }));
    },
    fetchAPI: async (cryptoData) => {
      set(() => ({
        spinner: true,
      }));
      const response = await getCryptoInfo(cryptoData);
      set(() => ({
        cryptoInfo: response,
        spinner: false,
      }));
    },
  }))
);
