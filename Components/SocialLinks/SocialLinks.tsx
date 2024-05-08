import React, { CSSProperties, ReactNode } from 'react';

import { useLocation } from 'react-router';

import { Grid, GridItem } from '../Grid/Grid';
import { TelegramNoCircle } from '../Icons/TelegramNoCircle';
import { ViberNoCircle } from '../Icons/ViberNoCircle';
import { VkNoCircle } from '../Icons/VkNoCircle';

import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { Current, currentDomain } from '@/GlobalConfig';

type SocialFooterPropsType = {
  title: string;
  style?: CSSProperties;
  titleStyle?: CSSProperties;
  description?: string;
  modal?: boolean;
};

export const SocialLinks: React.FC<SocialFooterPropsType> = ({
  title,
  style,
  titleStyle,
  description,
  modal,
}) => {
  const resolution = useAppSelector(state => state.config.viewport);

  const { pathname } = useLocation();

  const iconSize = {
    desktop: !modal ? 28 : 32,
    tablet: !modal ? 28 : 32,
    mobile: !modal ? 17 : 25,
  };

  const dataIcons: Array<ReactNode> = [
    <a
      href="viber://pa?chatURI=svetlana_onlinebanki"
      target="_blank"
      rel="noreferrer"
      style={
        currentDomain === 'new_sobank' && !pathname.includes('user') ? { opacity: 0 } : {}
      }
    >
      <ViberNoCircle
        size={iconSize[resolution]}
        color={Current.globalIconsColor[currentDomain]}
      />
      {modal ? '' : <span>Viber</span>}
    </a>,
    <a
      href="https://t.me/OnlinebankiBot"
      target="_blank"
      rel="noreferrer"
      style={
        currentDomain === 'new_sobank' && !pathname.includes('user') ? { opacity: 0 } : {}
      }
    >
      <TelegramNoCircle
        size={iconSize[resolution]}
        color={Current.globalIconsColor[currentDomain]}
      />
      {modal ? '' : <span>Telegram</span>}
    </a>,
    <a
      href="https://vk.com/write-207835428"
      target="_blank"
      rel="noreferrer"
      style={
        currentDomain === 'new_sobank' && !pathname.includes('user') ? { opacity: 0 } : {}
      }
    >
      <VkNoCircle
        size={iconSize[resolution]}
        color={Current.globalIconsColor[currentDomain]}
      />
      {modal ? '' : <span>ВКонтакте</span>}
    </a>,
  ];

  return (
    <>
      <div className="social-block">
        <h2
          className={`social-block__title 
          ${
            currentDomain === 'new_sobank' && !pathname.includes('user')
              ? currentDomain
              : ''
          }`}
          style={titleStyle}
        >
          {title}
        </h2>
        <p
          className={`social-block__subtitle color-gray 
           ${
             currentDomain === 'new_sobank' && !pathname.includes('user')
               ? currentDomain
               : ''
           }`}
        >
          Выберите удобный способ:
        </p>
      </div>
      <Grid container>
        <GridItem
          colMobile={12}
          justify={
            resolution === 'mobile' &&
            currentDomain === 'new_sobank' &&
            !pathname.includes('user')
              ? 'flex-start'
              : 'center'
          }
        >
          {dataIcons.map((item, index) => (
            <span
              id={
                currentDomain === 'new_sobank' && !pathname.includes('user')
                  ? `socials-block-${currentDomain}-${index}`
                  : ''
              }
              className={
                !modal
                  ? `social-block__items 
                  ${
                    currentDomain === 'new_sobank' && !pathname.includes('user')
                      ? currentDomain
                      : ''
                  }`
                  : 'social-block__modal'
              }
              key={`${item}_${index + 1}`}
              style={style}
            >
              {item}
            </span>
          ))}
        </GridItem>
      </Grid>
      {description && (
        <p
          className="social-block__subtitle color-gray ta-center"
          style={{ maxWidth: 400, margin: '20px auto 0' }}
        >
          {description}
        </p>
      )}
    </>
  );
};
