import React, { useState } from 'react';

import styles from './Converter.module.scss';

export const Converter = ({ rates, currencies }) => {
  const ratesKeys = Object.keys(rates);

  const [converterData, setConverterData] = useState(() => {
    const result = {};

    currencies.forEach(currency => {
      result[currency] = {
        to: currencies.find(c => c !== currency),
        first: '0',
        second: '0',
      };
    });

    return result;
  });

  const updateConverterData = (currency, update) => {
    setConverterData(data => {
      const result = structuredClone(data);
      const updatedKey = Object.keys(update)[0];
      const updatedValue = Object.values(update)[0];
      const to = result[currency].to;

      if (updatedKey === 'to') {
        result[currency].to = updatedValue;

        const newSecondValue =
          result[currency].first * rates[currency][updatedValue];

        result[currency].second = newSecondValue;
      }

      if (updatedKey === 'first') {
        result[currency].first = updatedValue;
        result[currency].second = updatedValue * rates[currency][to];
      }

      if (updatedKey === 'second') {
        result[currency].second = updatedValue;
        result[currency].first = updatedValue / rates[currency][to];
      }

      return result;
    });
  };

  return (
    <div className={styles.converter}>
      <span>Converter</span>

      <div className={styles.wrapper}>
        {currencies.map(currency => {
          return (
            <div className={styles.item} key={currency}>
              <label htmlFor='number' style={{ width: '40px' }}>
                {currency}
              </label>

              <input
                type='number'
                id='number'
                onChange={event =>
                  updateConverterData(currency, { first: event.target.value })
                }
                value={converterData[currency].first}
                min={0}
              />

              <div>&rarr;</div>

              <input
                type='number'
                onChange={event =>
                  updateConverterData(currency, { second: event.target.value })
                }
                value={converterData[currency].second}
                min={0}
              />

              <select
                name='currencies'
                value={converterData[currency].to}
                onChange={event =>
                  updateConverterData(currency, { to: event.target.value })
                }
              >
                {ratesKeys.map(rate => {
                  return (
                    <React.Fragment key={rate}>
                      {rate !== currency && (
                        <option value={rate}>{rate}</option>
                      )}
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};
