import React, { memo } from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import { Doc } from '../Icons/Doc';
import { Ssl } from '../Icons/Ssl';
import { Text } from '../Text/Text';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';

const InfoFooter: React.FC = memo(() => {
  const { viewport } = useAppSelector(store => store.config);
  const size = {
    desktop: 80,
    tablet: 40,
    mobile: 40,
  };
  return (
    <div
      style={{
        marginTop:
          (currentDomain === 'cc_sobank' || currentDomain === 'sovbank') &&
          viewport === 'mobile'
            ? 0
            : 80,
        padding: '40px 0px 0px 0px',
        borderTop: '1px solid #D8D8D8',
      }}
    >
      <Text
        text={`
              Протокол SSL (от англ. Secure Socket Layer – уровень защищенных сокетов) используется
              миллионами сайтов для защиты данных в интернете. Он гарантирует безопасное
              соединение между браузером пользователя и сервером. При использовании данного
              протокола все Ваши данные надежно защищены согласно правил защиты и надежности данного
              ресурса мы гарантируем, что все платежи вносимые Вами надежно защищены от
              злоумышленников.
            `}
        style={{
          display: 'block',
          marginBottom: viewport !== 'mobile' ? 40 : 26,
          textAlign: 'center',
        }}
      />
      <Grid container>
        <GridItem
          colDesktop={6}
          colTablet={6}
          colMobile={6}
          direction="column"
          justify="center"
          align="center"
        >
          <Ssl size={size[viewport]} color={Current.progressBar[currentDomain].icon} />
          <p className="description-text ta-center fs-18-16-13 color-gray">
            Защищенное соединение
          </p>
        </GridItem>
        <GridItem
          colDesktop={6}
          colTablet={6}
          colMobile={6}
          direction="column"
          justify="center"
          align="center"
        >
          <Doc size={size[viewport]} color={Current.progressBar[currentDomain].icon} />
          <p className="description-text ta-center fs-18-16-13 color-gray">
            Шифрование данных
          </p>
        </GridItem>
      </Grid>
    </div>
  );
});

export default InfoFooter;
