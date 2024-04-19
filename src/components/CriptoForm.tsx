import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { CryptoInfo } from "../types";

export const CriptoForm = () => {
  const cryptos = useCryptoStore((state) => state.cryptoData);
  const cryptoData = useCryptoStore((state) => state.fetchAPI);

  const [cryptoInfo, setCryptoInfo] = useState<CryptoInfo>({
    crypto: "BTC",
    currency: "USD",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCryptoInfo({
      ...cryptoInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cryptoData(cryptoInfo);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={(e) => handleChange(e)}>
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="crypto">Criptomoneda</label>
        <select name="crypto" id="crypto" onChange={(e) => handleChange(e)}>
          {cryptos.map((c) => (
            <option key={c.CoinInfo.Name} value={c.CoinInfo.Name}>
              {c.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value={"Cotizar Moneda"} />
    </form>
  );
};
