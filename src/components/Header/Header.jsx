import styles from './Header.module.scss';

export const Header = ({ rates }) => {
  const { USD, EUR } = rates;

  return (
    <header className={styles.header}>
      <span>Exchange rate</span>
      <div className={styles['rates-wrapper']}>
        <div className={styles.rate}>$ {USD.UAH}</div>
        <div className={styles.rate}>€ {EUR.UAH}</div>
      </div>
    </header>
  );
};
