import React, { memo } from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import { Eye } from '../Icons/Eye';
import Subtitle from '../Text/Subtitle/Subtitle';
import Title from '../Text/Title/Title';

import first from '@/Assets/images/news/image13.webp';
import second from '@/Assets/images/news/image14.webp';
import third from '@/Assets/images/news/image15.webp';
import fourth from '@/Assets/images/news/image16.webp';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const news: Array<{ text: string; view: number; image: string; href: string }> = [
  {
    text: 'Газпромбанк разместил выпуск инвестоблигаций на 500 млн',
    view: 632,
    image: first,
    href: 'https://ru.investing.com/news/economy/article-2076738',
  },
  {
    text: 'Банк России 16 августа купил валюту на 14,3 млрд руб.',
    view: 872,
    image: second,
    href: 'https://ru.investing.com/news/economy/article-2076739',
  },
  {
    text: 'Cредний курс доллара в банках Москвы составил 72,14/74,6 руб.',
    view: 1091,
    image: third,
    href: 'https://ru.investing.com/news/forex-news/article-2076734',
  },
  {
    text: 'Доллар стабилен на фоне снижения аппетита к риску',
    view: 710,
    image: fourth,
    href: 'https://ru.investing.com/news/forex-news/article-2076735',
  },
];

const LastNews: React.FC = memo(() => {
  const resolution = useAppSelector(state => state.config.viewport);

  const RenderDesktop = (
    <Grid container space={20} alignSpace={20} gridStyle={{ height: '100%' }}>
      {news.map((item, index) => (
        <GridItem
          key={`${item}_${index + 1}`}
          colDesktop={3}
          colTablet={6}
          colMobile={6}
          direction="row"
          className="news__hover"
          wrap="wrap"
          useWrapperLayout
          style={{ overflow: 'hidden', padding: 0 }}
        >
          <a href={item.href} target="_blank" rel="noreferrer">
            <div className="news-card">
              <div>
                <img src={item.image} className="news-card__img" alt="news" />
              </div>
              <div className="news-card__text">
                <div>
                  <Title
                    titleType="h5"
                    titleMargins={{
                      desktop: { bottom: 8 },
                      tablet: { bottom: 8 },
                      mobile: { bottom: 8 },
                    }}
                  >
                    {item.text}
                  </Title>
                </div>
                <div className="container-flex-start-row">
                  <Subtitle
                    subtitleClassName="description-text fs-15 color-gray"
                    subtitleStyle={{ width: 'auto', paddingRight: 8 }}
                  >
                    {item.view}
                  </Subtitle>
                  <Eye size={16} color="grayColor" />
                </div>
              </div>
            </div>
          </a>
        </GridItem>
      ))}
    </Grid>
  );

  const RenderTablet = (
    <div className="no-scroll-block last-news-block">
      {news.map((item, index) => (
        <div className="last-news-block__item" key={`${item}_${index + 1}`}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <div className="news-card">
              <div>
                <img src={item.image} className="news-card__img" alt="news" />
              </div>
              <div className="news-card__text">
                <div>
                  <Title
                    titleType="h5"
                    titleMargins={{
                      desktop: { bottom: 8 },
                      tablet: { bottom: 8 },
                      mobile: { bottom: 8 },
                    }}
                  >
                    {item.text}
                  </Title>
                </div>
                <div className="container-flex-start-row">
                  <Subtitle
                    subtitleClassName="description-text fs-15 color-gray"
                    subtitleStyle={{ width: 'auto', paddingRight: 8 }}
                  >
                    {item.view}
                  </Subtitle>
                  <Eye size={16} color="grayColor" />
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  const RenderMobile = (
    <article>
      <Grid container alignSpace={14}>
        {news.map((item, index) => (
          <GridItem key={`${item.text}_${index + 1}`} colMobile={12} direction="column">
            <h3 className="description-text color-gray mb-4 fs-18-16-13">Сегодня</h3>
            <p
              className="title-text color-black-main fs-14"
              style={{ fontWeight: 'normal' }}
            >
              {item.text}
            </p>
          </GridItem>
        ))}
      </Grid>
    </article>
  );

  const changeResolution = () => {
    switch (resolution) {
      case 'desktop':
        return RenderDesktop;
      case 'tablet':
        return RenderTablet;
      case 'mobile':
        return RenderMobile;
      default:
        return '';
    }
  };

  return (
    <>
      <Title
        titleMargins={{
          desktop: { bottom: 24 },
          tablet: { bottom: 24 },
          mobile: { bottom: 12 },
        }}
      >
        Последние новости
      </Title>
      {changeResolution()}
    </>
  );
});

export default LastNews;
