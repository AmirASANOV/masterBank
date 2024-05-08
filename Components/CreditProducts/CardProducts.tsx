import React, { memo, ReactNode } from 'react';

import styles from './CardProducts.module.sass';

interface ICardProducts {
  image: ReactNode | string;
  title: string;
  description: string;
  color: string;
}

const CardProducts: React.FC<ICardProducts> = memo(props => {
  const { image, title, description, color } = props;
  return (
    <div className={styles.cardBody} style={{ background: color }}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <h2 className={styles.cardDescription}>{description}</h2>
      <div className={styles.cardImage}>{image}</div>
    </div>
  );
});

export default CardProducts;
