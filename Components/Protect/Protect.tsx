import React from 'react';

import s from './Protect.module.sass';

const Protect = () => (
  <div className={s.wrapper}>
    <div className={s.protectContainer}>
      <div className={s.item}>
        <img className={s.img} src="/square-lock-check-01.svg" alt="logo" />
        <p className={s.text}>Защищенное соединение</p>
      </div>
      <div className={s.item}>
        <img className={s.img} src="/binary-code.svg" alt="logo" />

        <p className={s.text}>Шифрование данных</p>
      </div>
    </div>
    <p className={s.protect}>
      Ваши данные защищены в соответствии с ФЗ 152 и стандартами PCI DSS, ISO/IEC 27001,
      27017, 27018
    </p>
  </div>
);

export default Protect;
