import { useEffect, useState } from "react";
import { CriptoForm } from "./components/CriptoForm";
import { useCryptoStore } from "./store";
import { CryptoSchema } from "./types";
import { CriptoInfo } from "./components/CriptoInfo";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);
  const cryptoInfo = useCryptoStore((state) => state.cryptoInfo);
  const spinner = useCryptoStore((state) => state.spinner);

  const [crypto, setCrypto] = useState<CryptoSchema>(Object);

  useEffect(() => {
    fetchCryptos();
    if (Object.keys(cryptoInfo).length > 0) {
      setCrypto(cryptoInfo);
    }
  }, [cryptoInfo]);

  return (
    <>
      <div>
        <div className="container">
          <header>
            Cotizador de <span>Criptomonedas</span>
          </header>
          <main className="form">
            <CriptoForm />
            {spinner ? (
              <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
            ) : (
              <>
                {Object.keys(cryptoInfo).length > 0 && (
                  <CriptoInfo crypto={crypto} />
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
