import { CSSProperties } from 'react';

import { UrlExceptionsKeys } from '../index';

import { Colors } from '@/Components/Icons/IconConfig';
import { BackgroundLayout } from '@/Components/Layouts/Layout';
import { AdvantagesArray } from '@/Components/SecondaryAdvantages/SecondaryAdvantagesLists';
import { App } from '@/ProjectTypes/AppTypes';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

export type bannerImageProps = {
  [key in Viewport]: {
    style?: CSSProperties;
    src: {
      web: string;
      default: string;
    };
  };
};
export type ProductProps<T> = {
  [key in App.CreditProduct]: T;
};
export type BannerBackgroundProps = {
  [key in keyof UrlExceptionsKeys]: string;
};
type LayoutBackgroundProps = {
  background: keyof BackgroundLayout;
};
export type DomainProps<T> = { [key in keyof UrlExceptionsKeys]: T };
export type CurrentProps = {
  yandexMetrics: DomainProps<number>;
  favicon: DomainProps<string>;
  // footer: DomainProps<FooterFields>,
  banner: DomainProps<BannerFields>;
  progressBar: DomainProps<ProgressBarFields>;
  globalIconsColor: DomainProps<ProgressBarFields['icon']>;
  pdfColor: DomainProps<ProgressBarFields['icon']>;
  circlesColor: DomainProps<ProgressBarFields['icon']>;
  bannerBackground: BannerBackgroundProps;
  howItWork: DomainProps<{
    mainColor: string;
    subColor: string;
  }>;
  childrenForm: {
    numberColor: DomainProps<string>;
  };
  secondaryAdvantages: DomainProps<{ [key in App.CreditProduct]: AdvantagesArray }>;
  ourServices: DomainProps<string>;
  getCreditCard: DomainProps<{
    image: string;
    description: string;
  }>;
  inOtherBank: DomainProps<{
    image: string;
    description: string;
  }>;
  lampColor: DomainProps<ProgressBarFields['icon']>;
  clockTimer: DomainProps<ProgressBarFields['icon']>;
  OnBankAdvantages: DomainProps<{
    listItemColor: string;
    image: ProductProps<string>;
  }>;
  layoutBackground: DomainProps<LayoutBackgroundProps>;
  logo: DomainProps<string>;
  popularProduct: DomainProps<keyof Colors>;
  personalOffer: DomainProps<{ style: CSSProperties; img: string }>;
};

interface BannerFields {
  image: {
    [key in App.CreditProduct]: {
      config: bannerImageProps;
    };
  };
  useCloud: boolean;
  cloud: {
    left: string;
    right: string;
  };
  imageContainerStyle?: CSSProperties;
  titleColor?: ProductProps<string>;
  descriptionColor?: ProductProps<string>;
}

interface ProgressBarFields {
  progress: string;
  icon: keyof Colors;
}
