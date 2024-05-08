import { App } from '@/ProjectTypes/AppTypes';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

export type ShowcaseDataType = Array<ShowcaseItem>;

interface ShowcaseOfferProps {
  icon: string;
  title: string;
  value: string;
}

export type ProductType = App.CreditProduct;

type ShowcaseUniversalItemType = ShowcaseOffer & { product: ProductType };

export type ShowcaseUniversalItemPropsType = ShowcaseUniversalItemType & {
  resolution?: Viewport;
  onclickHandler: (product: ProductType) => void;
};

interface ShowcaseItem {
  product: ProductType;
  title: string;
  offers: Array<ShowcaseOffer>;
}

interface ShowcaseOffer {
  image: string;
  subtitle?: string;
  bankName?: string;
  link?: string;
  props: [ShowcaseOfferProps, ShowcaseOfferProps, ShowcaseOfferProps];
}
