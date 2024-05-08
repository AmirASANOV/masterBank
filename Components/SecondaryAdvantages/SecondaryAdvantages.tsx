import React, { FC, memo } from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import Wrapper from '../Layouts/Wrapper';
import Subtitle from '../Text/Subtitle/Subtitle';
import Title from '../Text/Title/Title';
import style from './SecondaryAdvantages.module.sass';
import { AdvantagesArray } from './SecondaryAdvantagesLists';

import { useAppSelector } from '@/CustomHooks/useAppSelector';

interface Props {
  array: AdvantagesArray;
}

const SecondaryAdvantages: FC<Props> = memo(({ array }) => {
  const background = 'linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 36.46%)';
  const viewport = useAppSelector(state => state.config.viewport);

  return (
    <div className={style.wrapper}>
      {viewport === 'desktop' ? (
        <>
          <Title
            titleStyle={{ marginBottom: 24 }}
            titleTextAlign={{ desktop: 'center', tablet: 'center', mobile: 'center' }}
          >
            Преимущества
          </Title>
          <Grid container space={24} alignSpace={24} style={{ height: '100%' }}>
            {array.map((item, index) => (
              <GridItem
                key={`${item.title}_${index + 1}`}
                colDesktop={viewport === 'desktop' ? item.colDesktop : 12}
                align="flex-start"
                direction="row"
                wrap="nowrap"
                justify="space-between"
                useWrapperLayout
                style={{
                  background,
                  height: '100%',
                  boxShadow: 'none',
                  borderRadius: '24px',
                  // alignContent: 'center',
                }}
              >
                <div
                  style={{
                    flex: item.colDesktop === 12 ? '1 0 73%' : '1 0 63%',
                    marginRight: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <Title
                    titleClassName="title-text fs-26 color-black-main mb-8"
                    titleStyle={{ marginBottom: 8, fontSize: '28px' }}
                  >
                    {item.title}
                  </Title>
                  <Subtitle
                    subtitleClassName="description-text fs-20-17-14 color-gray"
                    subtitleStyle={{ fontSize: '21px' }}
                  >
                    {item.description}
                  </Subtitle>
                </div>
                <div
                  style={{
                    maxWidth: '40%',
                    flex: item.colDesktop === 12 ? '1 0 30%' : '1 0 40%',
                    fontSize: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    style={{ objectFit: 'contain', maxWidth: '100%' }}
                    alt="icon Advantages"
                  />
                </div>
              </GridItem>
            ))}
          </Grid>
        </>
      ) : (
        ''
      )}
    </div>
  );
});

export default SecondaryAdvantages;
