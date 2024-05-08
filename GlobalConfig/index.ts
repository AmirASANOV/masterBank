// banner
import { CSSProperties } from 'react';

import OndCCAdvantages from '../Assets/advantages/advantages_onb.webp';
import SovCCAdvantages from '../Assets/advantages/advantages_sov.webp';
import kkSobankCcAdvantages from '../Assets/advantages/kk-sobank-cc-advantages.webp';
import OnbInstallmentAdvantages from '../Assets/advantages/onb_installment_advantages.webp';
import SovInstallmentAdvantages from '../Assets/advantages/sov_installment_advantages.webp';
import firstCreditCard from '../Assets/banner/first_credit/fc_credit_card.webp';
import firstCreditCash from '../Assets/banner/first_credit/fc_credit_cash.webp';
import firstCreditInstallment from '../Assets/banner/first_credit/fc_installment_card.webp';
import firstCreditLeftCloud from '../Assets/banner/firstCreditLeftCloud.webp';
import firstCreditRightCloud from '../Assets/banner/firstCreditRightCloud.webp';
import kkDesktopCC from '../Assets/banner/kk_sobank/desktop_kk_credit_card.webp';
import kkMobileCC from '../Assets/banner/kk_sobank/mobile_kk_credit_card.webp';
import bannerDesktopNewBank from '../Assets/banner/newSobank/banner_desktop.svg';
import bannerMobileNewBank from '../Assets/banner/newSobank/banner_mobile.svg';
import webONBCCMobile from '../Assets/banner/onbank/mobile_credit_card_onb.webp';
import webONBCashMobile from '../Assets/banner/onbank/mobile_credit_cash_onb.webp';
import webONBCInstallmentMobile from '../Assets/banner/onbank/mobile_installment_onb.webp';
import bannerCreditCash from '../Assets/banner/onbank/onbankCash.webp';
import bannerCreditCard from '../Assets/banner/onbank/onbankCreditCard.webp';
import bannerInstallment from '../Assets/banner/onbank/onbankInstallment.webp';
import onbankLeftCloud from '../Assets/banner/onbankLeftCloud.webp';
import onbankRightCloud from '../Assets/banner/onbankRightCloud.webp';
import hypothecDesktop from '../Assets/banner/sovbank/hypothec-banner-desktop.webp';
import hypothecMobile from '../Assets/banner/sovbank/hypothec-banner-mobile.webp';
import carCreditDesktop from '../Assets/banner/sovbank/loan-car-desktop.webp';
import carCreditMobile from '../Assets/banner/sovbank/loan-car-mobile.webp';
import MFODesktop from '../Assets/banner/sovbank/MFODesktop.webp';
import MFOMobile from '../Assets/banner/sovbank/MFOMobile.webp';
import webSovCashMobile from '../Assets/banner/sovbank/mobile_cash_sov.webp';
import webSovCInstallmentMobile from '../Assets/banner/sovbank/mobile_installment_sov.webp';
import sovbankCreditCard from '../Assets/banner/sovbank/sov_credit_card.webp';
import sovbankCreditCash from '../Assets/banner/sovbank/sov_credit_cash.webp';
import sovbankCreditInstallment from '../Assets/banner/sovbank/sov_installment_card.webp';
import webSovCCMobile from '../Assets/banner/sovbank/webSovCCMobile.webp';
import sovBankLeftCloud from '../Assets/banner/sovbankLeftCloud.webp';
import sovBankRightCloud from '../Assets/banner/sovbankRightCloud.webp';
// logo
import kk_fav from '../Assets/favicon/fav-kk-sobank.ico';
import onb from '../Assets/favicon/onbank.ico';
import sov from '../Assets/favicon/sov.ico';
import onbankGetCard from '../Assets/get_credit_card/onbank_get_card.webp';
import sovGetCard from '../Assets/get_credit_card/sov_get_card.webp';
import fire from '../Assets/images/personalOffer/personal_offer_fire.webp';
import offer_kk_sobank from '../Assets/images/personalOffer/personalOffer-kk.webp';
import kkSobankGetCard from '../Assets/in_other_bank/kk-get-credit-card.webp';
import onbankOtherBank from '../Assets/in_other_bank/onbank_other_bank.webp';
import sovOtherBank from '../Assets/in_other_bank/sov_other_bank.webp';
import firstCreditLogo from '../Assets/logo/firstCredit/first-credit-logo.webp';
import kkSobankLogo from '../Assets/logo/kk_sobank/kk-sobank-logo.webp';
import newLogo from '../Assets/logo/logo.svg';
import sovbankLogo from '../Assets/logo/newLogo.svg';
import onbankLogo from '../Assets/logo/onbank/onbank-logo.webp';
// services
import FCServices from '../Assets/services/first_credit_services.webp';
import onbankServices from '../Assets/services/onbank_services.webp';
import sovServices from '../Assets/services/sov_services.webp';

import { BannerBackgroundProps, CurrentProps } from './types';

import carDesktopMasterbank from '@/Assets/banner/masterbank/carMasterBankDestkop.webp';
import carMobileMasterbank from '@/Assets/banner/masterbank/carMasterBankMobile.webp';
import masterbankBannerCreditCard from '@/Assets/banner/masterbank/masterbank-creditCard.webp';
import masterbankBannerCreditCash from '@/Assets/banner/masterbank/masterbank-creditCash.webp';
import masterbankBannerHypothec from '@/Assets/banner/masterbank/masterbank-hypothec.webp';
import masterbankBannerInstallmentCard from '@/Assets/banner/masterbank/masterbank-installmentCard.webp';
import masterbankBannerMfo from '@/Assets/banner/masterbank/masterbank-mfo.webp';
import masterbankBannerCreditCardMobile from '@/Assets/banner/masterbank/masterbankCreditCard-mobile.webp';
import masterbankBannerCreditCashMobile from '@/Assets/banner/masterbank/masterbankCreditCash-mobile.webp';
import masterbankBannerHypothecMobile from '@/Assets/banner/masterbank/masterbankHypothec-mobile.webp';
import masterbankBannerInstallmentCardMobile from '@/Assets/banner/masterbank/masterbankInstallmentCard-mobile.webp';
import masterBankLeftCloud from '@/Assets/banner/masterBankLeftCloud.webp';
import masterBankRightCloud from '@/Assets/banner/masterBankRightCloud.webp';
import masterbank_fav from '@/Assets/favicon/masterbank.ico';
import masterbankLogo from '@/Assets/logo/masterbank.svg';
import masterbankAdvantages from '@/Assets/masterbank/masterbankCreditCardAdvantages.webp';
import masterbankGetCard from '@/Assets/masterbank/masterbankGetCard.webp';
import fireMasterbank from '@/Assets/masterbank/masterbankPersonalOffer.webp';
import { iconsConfig } from '@/Components/Icons/IconConfig';
import {
  CarCreditSovSecondaryAdvantages,
  CardFCAdvantages,
  CardSovBankAdvantages,
  CashFCAdvantages,
  CashSovBankAdvantages,
  CreditCashSecondaryAdvantages,
  HypothecSovSecondaryAdvantages,
  MFOOnbankSecondaryAdvantages,
  MFOSovSecondaryAdvantages,
} from '@/Components/SecondaryAdvantages/SecondaryAdvantagesLists';
// PersonalOffer

type urlConfig = {
  sovbank: 'sovbank';
  onbank: 'onbank';
  sop: 'sop';
  kk_sobank: 'kk_sobank';
  first_credit: 'first_credit';
  test_onbank: 'test_onbank';
  dev_onbank: 'dev_onbank';
  cc_sobank: 'cc_sobank';
  new_sobank: 'new_sobank';
  pro: 'pro';
  masterbank: 'masterbank';
};

export type UrlExceptionsKeys = Omit<urlConfig, 'test_onbank' | 'dev_onbank'>;

export const getCurrentDomainName = (): keyof UrlExceptionsKeys => {
  const { origin } = window.location;
  const env = process.env.THEME as keyof UrlExceptionsKeys;

  if (/localhost/i.test(origin)) {
    return env || 'masterbank';
  }

  return env;
};

export const currentDomain = getCurrentDomainName();

const bannerBackground: BannerBackgroundProps = {
  onbank: '#FEDB8F',
  sovbank: 'linear-gradient(270.29deg, #56C7F5 16.04%, #F3F7FA 65.38%)',
  sop: 'linear-gradient(270.29deg, #FA614A 16.04%, rgba(250, 97, 74, 0.5) 65.38%)',
  kk_sobank: '#B1B8BD',
  first_credit:
    'linear-gradient(94.65deg, #C4DFE6 -1.89%, rgba(196, 223, 230, 0.5) 102.59%)',
  cc_sobank: 'linear-gradient(270.29deg, #FA614A 16.04%, rgba(250, 97, 74, 0.5) 65.38%)',
  new_sobank: '#f6fdff',
  pro: 'linear-gradient(270.29deg, #56C7F5 16.04%, #F3F7FA 65.38%)',
  masterbank: 'linear-gradient(90.17deg, #EEC798 0.12%, #D8A95C 99.83%)',
};

const personalStyle: CSSProperties = {
  objectFit: 'cover',
  height: '300px',
  marginRight: 48,
  width: 'fit-content',
};

export const getCurrentDomainTitle = (lang?: 'ru' | 'eng') => {
  const language = lang;

  if (language === 'ru') {
    switch (currentDomain) {
      case 'first_credit':
        return 'Первый кредитный банк';
      case 'onbank':
        return 'Онлайн банк';
      case 'sovbank':
        return 'Содействие банкам';
      case 'sop':
        return 'Содействие банкам';
      case 'masterbank':
        return 'Мастер банк';
      default:
        return 'Содействие банкам';
    }
  } else if (language === 'eng') {
    switch (currentDomain) {
      case 'first_credit':
        return 'Первый кредитный банк';
      case 'onbank':
        return 'OnBank';
      case 'sovbank':
        return 'Sobank';
      case 'sop':
        return 'Sobank';
      case 'masterbank':
        return 'Masterbank';
      default:
        return 'Sobank';
    }
  } else {
    switch (currentDomain) {
      case 'first_credit':
        return 'Первый кредитный банк';
      case 'onbank':
        return 'OnBank';
      case 'sovbank':
        return 'Sobank';
      case 'sop':
        return 'Sobank';
      case 'masterbank':
        return 'Masterbank';
      default:
        return 'Sobank';
    }
  }
};
export const Current: CurrentProps = {
  yandexMetrics: {
    onbank: 85610464,
    sovbank: 85610464,
    sop: 85610464,
    kk_sobank: 85610464,
    first_credit: 0,
    cc_sobank: 85610464,
    new_sobank: 85610464,
    pro: 85610464,
    masterbank: 85610464,
  },
  favicon: {
    onbank: onb,
    sovbank: sov,
    sop: sov,
    kk_sobank: kk_fav,
    first_credit: '',
    cc_sobank: sov,
    new_sobank: sov,
    pro: sov,
    masterbank: masterbank_fav,
  },
  banner: {
    onbank: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: webONBCCMobile,
                default: webONBCCMobile,
              },
              style: {
                maxHeight: '75%',
                marginBottom: 40,
                marginRight: 0,
                width: 150,
                height: 230,
              },
            },
            tablet: {
              src: {
                web: bannerCreditCard,
                default: bannerCreditCard,
              },
              style: {
                maxHeight: '90%',
                marginRight: -30,
                width: 395,
                height: 250,
              },
            },
            desktop: {
              src: {
                web: bannerCreditCard,
                default: bannerCreditCard,
              },
              style: {
                maxHeight: '90%',
                marginRight: -30,
                marginBottom: -10,
                width: 560,
                height: 360,
              },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webONBCashMobile,
                default: webONBCashMobile,
              },
              style: {
                maxHeight: '100%',
                marginBottom: 30,
                marginRight: 0,
                width: 350,
                height: 290,
              },
            },
            tablet: {
              src: {
                web: bannerCreditCash,
                default: bannerCreditCash,
              },
              style: {
                maxHeight: '100%',
                marginRight: -50,
                width: 474,
                height: 275,
              },
            },
            desktop: {
              src: {
                web: bannerCreditCash,
                default: bannerCreditCash,
              },
              style: {
                height: 400,
                marginBottom: -10,
                width: 691,
              },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: webONBCInstallmentMobile,
                default: webONBCInstallmentMobile,
              },
              style: {
                maxHeight: '100%',
                marginBottom: 15,
                marginRight: 0,
                width: 195,
                height: 245,
              },
            },
            tablet: {
              src: {
                web: bannerInstallment,
                default: bannerInstallment,
              },
              style: {
                maxHeight: '90%',
                width: 207,
                height: 250,
              },
            },
            desktop: {
              src: {
                web: bannerInstallment,
                default: bannerInstallment,
              },
              style: {
                maxHeight: '90%',
                width: 301,
                marginBottom: -10,
                height: 360,
              },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 213, width: 185, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: onbankLeftCloud,
        right: onbankRightCloud,
      },
    },
    sovbank: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 306, width: 276, marginBottom: -45 },
            },
            desktop: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webSovCashMobile,
                default: sovbankCreditCash,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
            },
            desktop: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
            },
            desktop: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: sovBankLeftCloud,
        right: sovBankRightCloud,
      },
      titleColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
      descriptionColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
    },
    cc_sobank: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 204, width: 184, marginBottom: 30 },
            },
            tablet: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 306, width: 276, marginBottom: -45 },
            },
            desktop: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 388, width: 350, marginBottom: -20 },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webSovCashMobile,
                default: sovbankCreditCash,
              },
              style: { height: 237, width: 223 },
            },
            tablet: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 250, width: 255 },
            },
            desktop: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 412, width: 388, marginBottom: -20 },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: webSovCInstallmentMobile,
                default: sovbankCreditInstallment,
              },
              style: {
                height: '230px',
                width: '190px',
                marginRight: 0,
                marginBottom: 20,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 270, width: 254, marginBottom: -10 },
            },
            desktop: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 388, width: 361, marginBottom: -10 },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: sovBankLeftCloud,
        right: sovBankRightCloud,
      },
      titleColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
      descriptionColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
    },
    sop: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: webSovCCMobile,
                default: sovbankCreditCard,
              },
              style: { height: 204, width: 184, marginBottom: 30 },
            },
            tablet: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 306, width: 276, marginBottom: -45 },
            },
            desktop: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 388, width: 350, marginBottom: -20 },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webSovCashMobile,
                default: sovbankCreditCash,
              },
              style: { height: 237, width: 223 },
            },
            tablet: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 250, width: 255 },
            },
            desktop: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 412, width: 388, marginBottom: -20 },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: webSovCInstallmentMobile,
                default: sovbankCreditInstallment,
              },
              style: {
                height: '230px',
                width: '190px',
                marginRight: 0,
                marginBottom: 20,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 270, width: 254, marginBottom: -10 },
            },
            desktop: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 388, width: 361, marginBottom: -10 },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: sovBankLeftCloud,
        right: sovBankRightCloud,
      },
      titleColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
      descriptionColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
    },
    kk_sobank: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: kkMobileCC,
                default: kkDesktopCC,
              },
              style: { height: 204, width: 184, marginBottom: 30 },
            },
            tablet: {
              src: {
                web: kkDesktopCC,
                default: kkDesktopCC,
              },
              style: { height: 306, width: 276, marginBottom: -45 },
            },
            desktop: {
              src: {
                web: kkDesktopCC,
                default: kkDesktopCC,
              },
              style: { height: 388, width: 350, marginBottom: -20 },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webSovCashMobile,
                default: sovbankCreditCash,
              },
              style: { height: 237, width: 223 },
            },
            tablet: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 250, width: 255 },
            },
            desktop: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 412, width: 388, marginBottom: -20 },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: webSovCInstallmentMobile,
                default: sovbankCreditInstallment,
              },
              style: {
                height: '230px',
                width: '190px',
                marginRight: 0,
                marginBottom: 20,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 270, width: 254, marginBottom: -10 },
            },
            desktop: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 388, width: 361, marginBottom: -10 },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: false,
      cloud: {
        left: sovBankLeftCloud,
        right: sovBankRightCloud,
      },
      titleColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
      descriptionColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
    },
    first_credit: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: firstCreditCard,
                default: firstCreditCard,
              },
              style: {
                height: 'initial',
                maxHeight: '60%',
                marginRight: 20,
              },
            },
            tablet: {
              src: {
                web: firstCreditCard,
                default: firstCreditCard,
              },
              style: {
                height: 'initial',
                maxHeight: '90%',
              },
            },
            desktop: {
              src: {
                web: firstCreditCard,
                default: firstCreditCard,
              },
              style: {
                height: 'initial',
                maxHeight: '90%',
              },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: firstCreditCash,
                default: firstCreditCash,
              },
              style: {
                height: 'initial',
                maxHeight: '55%',
                marginRight: 20,
                marginBottom: 25,
              },
            },
            tablet: {
              src: {
                web: firstCreditCash,
                default: firstCreditCash,
              },
              style: {
                height: 'initial',
                maxHeight: '90%',
              },
            },
            desktop: {
              src: {
                web: firstCreditCash,
                default: firstCreditCash,
              },
              style: {
                height: 'initial',
                maxHeight: '90%',
              },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: firstCreditInstallment,
                default: firstCreditInstallment,
              },
              style: {
                height: 'initial',
                maxHeight: '50%',
              },
            },
            tablet: {
              src: {
                web: firstCreditInstallment,
                default: firstCreditInstallment,
              },
              style: {
                height: 'initial',
                maxHeight: '90%',
              },
            },
            desktop: {
              src: {
                web: firstCreditInstallment,
                default: firstCreditInstallment,
              },
              style: {
                height: 'initial',
                maxHeight: '90%',
              },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 0, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -40 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: firstCreditLeftCloud,
        right: firstCreditRightCloud,
      },
      imageContainerStyle: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    new_sobank: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: bannerMobileNewBank,
                default: bannerMobileNewBank,
              },
              style: { height: 204, width: 184, marginBottom: 30 },
            },
            tablet: {
              src: {
                web: bannerDesktopNewBank,
                default: bannerDesktopNewBank,
              },
              style: { height: 306, width: 276, marginBottom: -45 },
            },
            desktop: {
              src: {
                web: bannerDesktopNewBank,
                default: bannerDesktopNewBank,
              },
              style: { height: 388, width: 350, marginBottom: -20 },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webSovCashMobile,
                default: sovbankCreditCash,
              },
              style: { height: 237, width: 223 },
            },
            tablet: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 250, width: 255 },
            },
            desktop: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 412, width: 388, marginBottom: -20 },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: webSovCInstallmentMobile,
                default: sovbankCreditInstallment,
              },
              style: {
                height: '230px',
                width: '190px',
                marginRight: 0,
                marginBottom: 20,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 270, width: 254, marginBottom: -10 },
            },
            desktop: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 388, width: 361, marginBottom: -10 },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: false,
      cloud: {
        left: sovBankLeftCloud,
        right: sovBankRightCloud,
      },
      titleColor: {
        credit_cash: '#5E6165',
        credit_card: '#5E6165',
        installment_card: '#5E6165',
        mfo: '#5E6165',
        hypothec: '#5E6165',
        car_credit: '#5E6165',
      },
      descriptionColor: {
        credit_cash: '#787878',
        credit_card: '#787878',
        installment_card: '#787878',
        mfo: '#787878',
        hypothec: '#787878',
        car_credit: '#787878',
      },
    },
    pro: {
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 204, width: 184, marginBottom: 30 },
            },
            tablet: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 306, width: 276, marginBottom: -45 },
            },
            desktop: {
              src: {
                web: sovbankCreditCard,
                default: sovbankCreditCard,
              },
              style: { height: 388, width: 350, marginBottom: -20 },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: webSovCashMobile,
                default: sovbankCreditCash,
              },
              style: { height: 237, width: 223 },
            },
            tablet: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 250, width: 255 },
            },
            desktop: {
              src: {
                web: sovbankCreditCash,
                default: sovbankCreditCash,
              },
              style: { height: 412, width: 388, marginBottom: -20 },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: webSovCInstallmentMobile,
                default: sovbankCreditInstallment,
              },
              style: {
                height: '230px',
                width: '190px',
                marginRight: 0,
                marginBottom: 20,
              },
            },
            tablet: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 270, width: 254, marginBottom: -10 },
            },
            desktop: {
              src: {
                web: sovbankCreditInstallment,
                default: sovbankCreditInstallment,
              },
              style: { height: 388, width: 361, marginBottom: -10 },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: MFOMobile,
                default: MFOMobile,
              },
              style: { height: 186, width: 161, marginBottom: 55, marginRight: 20 },
            },
            tablet: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 268, width: 232, marginBottom: -20 },
            },
            desktop: {
              src: {
                web: MFODesktop,
                default: MFODesktop,
              },
              style: { height: 360, width: 312, marginBottom: -5 },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: hypothecMobile,
                default: hypothecMobile,
              },
              style: { height: 225, width: 220, marginRight: 10, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 317, width: 310, marginBottom: -50, marginRight: -20 },
            },
            desktop: {
              src: {
                web: hypothecDesktop,
                default: hypothecDesktop,
              },
              style: { height: 386, width: 377, marginBottom: 10 },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carCreditMobile,
                default: carCreditMobile,
              },
              style: { height: 183, width: 333, marginBottom: 25 },
            },
            tablet: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 237, width: 530, marginBottom: -20, marginRight: -200 },
            },
            desktop: {
              src: {
                web: carCreditDesktop,
                default: carCreditDesktop,
              },
              style: { height: 273, width: 615, marginBottom: 50, marginRight: -70 },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: sovBankLeftCloud,
        right: sovBankRightCloud,
      },
      titleColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
      descriptionColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
    },
    masterbank: {
      imageContainerStyle: {
        backgroundPosition: 'center bottom',
        backgroundSize: 'contain',
        width: 202,
      },
      image: {
        credit_card: {
          config: {
            mobile: {
              src: {
                web: masterbankBannerCreditCardMobile,
                default: masterbankBannerCreditCardMobile,
              },
              style: { height: 290, width: 202, marginBottom: 30 },
            },
            tablet: {
              src: {
                web: masterbankBannerCreditCard,
                default: masterbankBannerCreditCard,
              },
              style: {
                height: 306,
                width: 276,
                marginBottom: -45,
                backgroundSize: '90%',
                marginRight: 80,
              },
            },
            desktop: {
              src: {
                web: masterbankBannerCreditCard,
                default: masterbankBannerCreditCard,
              },
              style: { height: 388, width: 350, marginBottom: -20 },
            },
          },
        },
        credit_cash: {
          config: {
            mobile: {
              src: {
                web: masterbankBannerCreditCashMobile,
                default: masterbankBannerCreditCashMobile,
              },
              style: { height: 290, width: 202, marginTop: 16 },
            },
            tablet: {
              src: {
                web: masterbankBannerCreditCash,
                default: masterbankBannerCreditCash,
              },
              style: {
                height: 290,
                width: 255,
                backgroundSize: '80%',
                margin: '24px 90px 0 auto',
              },
            },
            desktop: {
              src: {
                web: masterbankBannerCreditCash,
                default: masterbankBannerCreditCash,
              },
              style: { height: 412, width: 388, marginBottom: -20 },
            },
          },
        },
        installment_card: {
          config: {
            mobile: {
              src: {
                web: masterbankBannerInstallmentCardMobile,
                default: masterbankBannerInstallmentCardMobile,
              },
              style: {
                height: 301,
                width: 210,
                marginRight: 0,
                marginBottom: 20,
                backgroundPosition: 'right',
              },
            },
            tablet: {
              src: {
                web: masterbankBannerInstallmentCard,
                default: masterbankBannerInstallmentCard,
              },
              style: {
                height: 270,
                width: 254,
                marginBottom: -10,
                backgroundSize: '80%',
                backgroundPosition: 'right',
              },
            },
            desktop: {
              src: {
                web: masterbankBannerInstallmentCard,
                default: masterbankBannerInstallmentCard,
              },
              style: { height: 388, width: 361, marginTop: 12 },
            },
          },
        },
        mfo: {
          config: {
            mobile: {
              src: {
                web: masterbankBannerMfo,
                default: masterbankBannerMfo,
              },
              style: { height: 290, width: 202, backgroundSize: 'contain' },
            },
            tablet: {
              src: {
                web: masterbankBannerMfo,
                default: masterbankBannerMfo,
              },
              style: { height: 268, width: 232, backgroundSize: '90%' },
            },
            desktop: {
              src: {
                web: masterbankBannerMfo,
                default: masterbankBannerMfo,
              },
              style: {
                height: 392,
                minWidth: 378,
                marginTop: 10,
                backgroundPosition: 'center center',
              },
            },
          },
        },
        hypothec: {
          config: {
            mobile: {
              src: {
                web: masterbankBannerHypothecMobile,
                default: masterbankBannerHypothecMobile,
              },
              style: { height: 276, width: 245, margin: '30px -10px 0 auto' },
            },
            tablet: {
              src: {
                web: masterbankBannerHypothec,
                default: masterbankBannerHypothec,
              },
              style: { height: 317, width: 310, backgroundSize: '110%' },
            },
            desktop: {
              src: {
                web: masterbankBannerHypothec,
                default: masterbankBannerHypothec,
              },
              style: {
                height: 384,
                width: 420,
                backgroundSize: '110% 100%',
                marginTop: 20,
                backgroundPosition: 'bottom center',
              },
            },
          },
        },
        car_credit: {
          config: {
            mobile: {
              src: {
                web: carMobileMasterbank,
                default: carMobileMasterbank,
              },
              style: {
                height: 243,
                width: 485,
                marginBottom: 0,
                maxWidth: 'none',
                backgroundPosition: 'bottom -16px right',
              },
            },
            tablet: {
              src: {
                web: carDesktopMasterbank,
                default: carDesktopMasterbank,
              },
              style: {
                height: 243,
                width: 640,
                maxWidth: 'none',
                backgroundPosition: 'right 20px bottom',
                marginRight: 0,
                backgroundSize: '60%',
              },
            },
            desktop: {
              src: {
                web: carDesktopMasterbank,
                default: carDesktopMasterbank,
              },
              style: {
                height: 320,
                minWidth: 640,
                maxWidth: 'none',
                backgroundPosition: 'bottom center',
                position: 'absolute',
                right: -90,
                bottom: 12,
              },
            },
          },
        },
      },
      useCloud: true,
      cloud: {
        left: masterBankLeftCloud,
        right: masterBankRightCloud,
      },
      titleColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
      descriptionColor: {
        credit_cash: 'rgba(255,255,255,1)',
        credit_card: 'rgba(255,255,255,1)',
        installment_card: 'rgba(255,255,255,1)',
        mfo: 'rgba(255,255,255,1)',
        hypothec: 'rgba(255,255,255,1)',
        car_credit: 'rgba(255,255,255,1)',
      },
    },
  },
  progressBar: {
    onbank: {
      progress: iconsConfig.colors.primaryColor,
      icon: 'primaryColor',
    },
    sovbank: {
      progress: iconsConfig.colors.sovbankColor,
      icon: 'sovbankColor',
    },
    pro: {
      progress: iconsConfig.colors.sovbankColor,
      icon: 'sovbankColor',
    },
    cc_sobank: {
      progress: iconsConfig.colors.sovbankColor,
      icon: 'sovbankColor',
    },
    sop: {
      progress: iconsConfig.colors.sovbankColor,
      icon: 'sovbankColor',
    },
    kk_sobank: {
      progress: iconsConfig.colors.kkSovbankIconColor,
      icon: 'kkSovbankIconColor',
    },
    first_credit: {
      progress: iconsConfig.colors.firstCreditColor,
      icon: 'firstCreditColor',
    },
    new_sobank: {
      progress: iconsConfig.colors.sovbankColor,
      icon: 'sovbankColor',
    },
    masterbank: {
      progress: iconsConfig.colors.masterbankColor,
      icon: 'masterbankColor',
    },
  },
  globalIconsColor: {
    onbank: 'blueColor',
    sovbank: 'sovbankIconColor',
    sop: 'sovbankIconColor',
    kk_sobank: 'kkSovbankIconColor',
    first_credit: 'firstCreditColor',
    cc_sobank: 'sovbankIconColor',
    new_sobank: 'sovbankIconColor',
    pro: 'sovbankIconColor',
    masterbank: 'masterbankColor',
  },
  pdfColor: {
    onbank: 'primaryColor',
    sovbank: 'sovbankIconColor',
    sop: 'sovbankIconColor',
    kk_sobank: 'kkSovbankIconColor',
    first_credit: 'firstCreditColor',
    cc_sobank: 'sovbankIconColor',
    new_sobank: 'sovbankIconColor',
    pro: 'sovbankIconColor',
    masterbank: 'masterbankColor',
  },
  circlesColor: {
    onbank: 'primaryColor',
    sovbank: 'sovbankIconColor',
    sop: 'sovbankIconColor',
    kk_sobank: 'kkSovbankIconColor',
    first_credit: 'firstCreditColor',
    cc_sobank: 'sovbankIconColor',
    new_sobank: 'sovbankIconColor',
    pro: 'sovbankIconColor',
    masterbank: 'masterbankColor',
  },
  howItWork: {
    onbank: {
      mainColor: '#F29727',
      subColor: '#03318C',
    },
    sovbank: {
      mainColor: '#FA614A',
      subColor: '#317EB0',
    },
    cc_sobank: {
      mainColor: '#FA614A',
      subColor: '#317EB0',
    },
    sop: {
      mainColor: '#FA614A',
      subColor: '#317EB0',
    },
    kk_sobank: {
      mainColor: '#DA308B',
      subColor: '#C2850F',
    },
    first_credit: {
      mainColor: '#66A5AD',
      subColor: '#C4DFE6',
    },
    new_sobank: {
      mainColor: '#fa614a',
      subColor: '#317eb0',
    },
    pro: {
      mainColor: '#FA614A',
      subColor: '#317EB0',
    },
    masterbank: {
      mainColor: '#E54762',
      subColor: '#317EB0',
    },
  },
  childrenForm: {
    numberColor: {
      onbank: iconsConfig.colors.blueColor,
      sovbank: iconsConfig.colors.sovbankIconColor,
      cc_sobank: iconsConfig.colors.sovbankIconColor,
      sop: iconsConfig.colors.sovbankIconColor,
      kk_sobank: iconsConfig.colors.kkSovbankIconColor,
      first_credit: iconsConfig.colors.firstCreditColor,
      new_sobank: iconsConfig.colors.sovbankIconColor,
      pro: iconsConfig.colors.sovbankIconColor,
      masterbank: iconsConfig.colors.masterbankColor,
    },
  },
  secondaryAdvantages: {
    onbank: {
      credit_card: [],
      credit_cash: CreditCashSecondaryAdvantages,
      installment_card: [],
      mfo: MFOOnbankSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    sovbank: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    cc_sobank: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    sop: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    kk_sobank: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    first_credit: {
      credit_card: CardFCAdvantages,
      credit_cash: CashFCAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    new_sobank: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    pro: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
    masterbank: {
      credit_card: CardSovBankAdvantages,
      credit_cash: CashSovBankAdvantages,
      installment_card: [],
      mfo: MFOSovSecondaryAdvantages,
      hypothec: HypothecSovSecondaryAdvantages,
      car_credit: CarCreditSovSecondaryAdvantages,
    },
  },
  ourServices: {
    onbank: onbankServices,
    sovbank: sovServices,
    cc_sobank: sovServices,
    sop: sovServices,
    kk_sobank: sovServices,
    first_credit: FCServices,
    new_sobank: sovServices,
    pro: sovServices,
    masterbank: sovServices,
  },
  getCreditCard: {
    onbank: {
      image: onbankGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    sovbank: {
      image: sovGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    sop: {
      image: sovGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    kk_sobank: {
      image: sovGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    first_credit: {
      image: '',
      description: '',
    },
    cc_sobank: {
      image: sovGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    new_sobank: {
      image: sovGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    pro: {
      image: sovGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
    masterbank: {
      image: masterbankGetCard,
      description:
        'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбэком до 30%',
    },
  },
  inOtherBank: {
    onbank: {
      image: onbankOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    sovbank: {
      image: sovOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    sop: {
      image: sovOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    kk_sobank: {
      image: kkSobankGetCard,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    first_credit: {
      image: '',
      description: '',
    },
    cc_sobank: {
      image: sovOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    new_sobank: {
      image: sovOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    pro: {
      image: sovOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
    masterbank: {
      image: onbankOtherBank,
      description: `Оформите карту на «${getCurrentDomainTitle(
        'eng',
      )}» и погасите задолженность без комиссии в интернет-банке`,
    },
  },
  lampColor: {
    onbank: 'primaryColor',
    sovbank: 'sovbankColor',
    cc_sobank: 'sovbankColor',
    sop: 'sovbankColor',
    kk_sobank: 'kkSovbankIconColor',
    first_credit: 'firstCreditColor',
    new_sobank: 'sovbankColor',
    pro: 'sovbankColor',
    masterbank: 'masterbankColor',
  },
  clockTimer: {
    onbank: 'primaryColor',
    sovbank: 'sovbankIconColor',
    cc_sobank: 'sovbankIconColor',
    sop: 'sovbankIconColor',
    kk_sobank: 'kkSovbankIconColor',
    first_credit: 'firstCreditColor',
    new_sobank: 'sovbankIconColor',
    pro: 'sovbankIconColor',
    masterbank: 'masterbankColor',
  },
  bannerBackground,
  OnBankAdvantages: {
    sovbank: {
      listItemColor: '#FA614A',
      image: {
        credit_card: SovCCAdvantages,
        credit_cash: SovCCAdvantages,
        installment_card: SovInstallmentAdvantages,
        mfo: SovCCAdvantages,
        hypothec: SovCCAdvantages,
        car_credit: SovCCAdvantages,
      },
    },
    cc_sobank: {
      listItemColor: '#FA614A',
      image: {
        credit_card: SovCCAdvantages,
        credit_cash: SovCCAdvantages,
        installment_card: SovInstallmentAdvantages,
        mfo: SovCCAdvantages,
        hypothec: SovCCAdvantages,
        car_credit: SovCCAdvantages,
      },
    },
    sop: {
      listItemColor: '#FA614A',
      image: {
        credit_card: SovCCAdvantages,
        credit_cash: SovCCAdvantages,
        installment_card: SovInstallmentAdvantages,
        mfo: SovCCAdvantages,
        hypothec: SovCCAdvantages,
        car_credit: SovCCAdvantages,
      },
    },
    kk_sobank: {
      listItemColor: '#C2850F',
      image: {
        credit_card: kkSobankCcAdvantages,
        credit_cash: SovCCAdvantages,
        installment_card: SovInstallmentAdvantages,
        mfo: SovCCAdvantages,
        hypothec: SovCCAdvantages,
        car_credit: SovCCAdvantages,
      },
    },
    onbank: {
      listItemColor: '#03318C',
      image: {
        credit_card: OndCCAdvantages,
        credit_cash: OndCCAdvantages,
        installment_card: OnbInstallmentAdvantages,
        mfo: OnbInstallmentAdvantages,
        hypothec: OnbInstallmentAdvantages,
        car_credit: OnbInstallmentAdvantages,
      },
    },
    first_credit: {
      listItemColor: '#03318C',
      image: {
        credit_card: OndCCAdvantages,
        credit_cash: OndCCAdvantages,
        installment_card: OnbInstallmentAdvantages,
        mfo: OnbInstallmentAdvantages,
        hypothec: OnbInstallmentAdvantages,
        car_credit: OnbInstallmentAdvantages,
      },
    },
    new_sobank: {
      listItemColor: '#FA614A',
      image: {
        credit_card: SovCCAdvantages,
        credit_cash: SovCCAdvantages,
        installment_card: SovInstallmentAdvantages,
        mfo: SovCCAdvantages,
        hypothec: SovCCAdvantages,
        car_credit: SovCCAdvantages,
      },
    },
    pro: {
      listItemColor: '#FA614A',
      image: {
        credit_card: SovCCAdvantages,
        credit_cash: SovCCAdvantages,
        installment_card: SovInstallmentAdvantages,
        mfo: SovCCAdvantages,
        hypothec: SovCCAdvantages,
        car_credit: SovCCAdvantages,
      },
    },
    masterbank: {
      listItemColor: '#FA614A',
      image: {
        credit_card: masterbankAdvantages,
        credit_cash: masterbankAdvantages,
        installment_card: masterbankAdvantages,
        mfo: masterbankAdvantages,
        hypothec: masterbankAdvantages,
        car_credit: masterbankAdvantages,
      },
    },
  },
  layoutBackground: {
    onbank: {
      background: 'lightBluePurple',
    },
    sovbank: {
      background: 'sovbankLayout',
    },
    sop: {
      background: 'sovbankLayout',
    },
    kk_sobank: {
      background: 'grayLayout',
    },
    first_credit: {
      background: 'firstCreditLayout',
    },
    cc_sobank: {
      background: 'sovbankLayout',
    },
    new_sobank: {
      background: 'sovbankLayout',
    },
    pro: {
      background: 'sovbankLayout',
    },
    masterbank: {
      background: 'masterBankLayout',
    },
  },
  logo: {
    onbank: onbankLogo,
    sovbank: sovbankLogo,
    sop: sovbankLogo,
    kk_sobank: kkSobankLogo,
    first_credit: firstCreditLogo,
    cc_sobank: sovbankLogo,
    new_sobank: newLogo,
    pro: sovbankLogo,
    masterbank: masterbankLogo,
  },
  popularProduct: {
    onbank: 'blueColor',
    sovbank: 'blueColor',
    cc_sobank: 'blueColor',
    sop: 'blueColor',
    kk_sobank: 'kkSovbankIconColor',
    first_credit: 'blueColor',
    new_sobank: 'blueColor',
    pro: 'blueColor',
    masterbank: 'masterbankColor',
  },
  personalOffer: {
    onbank: {
      style: personalStyle,
      img: fire,
    },
    sovbank: {
      style: personalStyle,
      img: fire,
    },
    cc_sobank: {
      style: personalStyle,
      img: fire,
    },
    sop: {
      style: personalStyle,
      img: fire,
    },
    first_credit: {
      style: personalStyle,
      img: fire,
    },
    kk_sobank: {
      style: { marginLeft: 'auto', marginRight: 25 },
      img: offer_kk_sobank,
    },
    new_sobank: {
      style: personalStyle,
      img: fire,
    },
    pro: {
      style: personalStyle,
      img: fire,
    },
    masterbank: {
      style: personalStyle,
      img: fireMasterbank,
    },
  },
};
