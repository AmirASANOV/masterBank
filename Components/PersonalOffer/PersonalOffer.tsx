import React, { FC, memo } from 'react';

import FeedBack from '../FeedBack/FeedBack';
// import { Grid, GridItem } from '../Grid/Grid';
import { CheckboxInput } from '../Inputs/OtherInputs';

import feedbackImg from './feedback.png';
import styles from './PersonalOffer.module.sass';

// import { Current, currentDomain } from '@/GlobalConfig';

const PersonalOffer: FC = memo(() => (
  <div className={styles.personalOfferWrapper}>
    <div className={styles.personalOfferContent}>
      <FeedBack
        page="default"
        useErrorMessage={false}
        useResultMessage={false}
        buttonText="Узнать"
      />
      <CheckboxInput
        state
        setState={() => ''}
        target="_blank"
        containerId={Math.random().toString()}
        id="123"
        required
      />
    </div>
    <img className={styles.img} src={feedbackImg} alt="мобильный телефон" />
  </div>
));

export default PersonalOffer;
