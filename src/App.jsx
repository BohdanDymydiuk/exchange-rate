/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getRates } from './api/currency';
import { Auth } from './components/Auth';
import { Converter } from './components/Converter/Converter';
import { Header } from './components/Header';

import styles from './App.module.scss';

function App() {
  const currencies = ['UAH', 'USD', 'EUR', 'GBP', 'JPY'];

  const [user, setUser] = useState();
  const [rates, setRates] = useState();

  useEffect(() => {
    Promise.all(currencies.map(getRates)).then(results => {
      const ratesState = {};

      currencies.forEach((currency, index) => {
        const { UAH, USD, EUR, GBP, JPY } = results[index];

        ratesState[currency] = { UAH, USD, EUR, GBP, JPY };
      });

      setRates(ratesState);
    });
  }, []);

  return (
    <div className={styles.app}>
      {user ? (
        <>
          {rates && <Header rates={rates} />}
          {rates && (
            <Converter rates={rates} currencies={currencies.slice(0, 3)} />
          )}
        </>
      ) : (
        <Auth onLogin={setUser} />
      )}
    </div>
  );
}

export default App;
