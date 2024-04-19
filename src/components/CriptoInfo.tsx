import { CryptoSchema } from "../types";

type CriptoInfoProps = {
  crypto: CryptoSchema;
};

export const CriptoInfo = ({ crypto }: CriptoInfoProps) => {
  return (
    <div>
      <h2>Cotización</h2>
      <div className="info">
        <div>
          <img src={`http://cryptocompare.com/${crypto.IMAGEURL}`} alt="Imagen Crypto" />
        </div>
        <div>
          <p>
            El precio es de: <span className="spanInfo">{crypto.PRICE}</span>{" "}
          </p>
          <p>
            Precio más alto del día:{" "}
            <span className="spanInfo">{crypto.HIGH24HOUR}</span>
          </p>
          <p>
            Precio más bajo del día:{" "}
            <span className="spanInfo">{crypto.LOW24HOUR}</span>
          </p>
          <p>
            Variación últimas 24 horas:{" "}
            <span className="spanInfo">{crypto.CHANGE24HOUR}</span>
          </p>
          <p>
            Última actualización:{" "}
            <span className="spanInfo">{crypto.LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
