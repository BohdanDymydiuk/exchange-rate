/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { getRates } from './api/currency';
import { Converter } from './components/Converter/Converter';
import { Header } from './components/Header';

import styles from './App.module.scss';

function App() {
  const currencies = ['UAH', 'USD', 'EUR', 'GBP', 'JPY'];

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
      {rates && <Header rates={rates} />}
      {rates && <Converter rates={rates} currencies={currencies.slice(0, 3)} />}
    </div>
  );
}

export default App;
