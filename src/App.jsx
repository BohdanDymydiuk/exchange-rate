import { Header } from './components/Header';

import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { getRates } from './api/currency';

function App() {
  const [rates, setRates] = useState();
  
  useEffect(() => {
    const currencies = ['UAH', 'USD', 'EUR'];

    Promise.all(currencies.map(getRates))
      .then(results => {
        const ratesState = {};

        currencies.forEach((currency, index) => {
          const { UAH, USD, EUR } = results[index];

          ratesState[currency] = { UAH, USD, EUR };
        });

        setRates(ratesState);
      });
  }, []);

  return (
    <div className={styles.app}>
      {rates && <Header rates={rates} />}
    </div>
  );
}

export default App;
