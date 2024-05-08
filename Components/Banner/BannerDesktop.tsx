"use client";
import React, { memo, useState } from "react";

import PressButton from "../Buttons/PressButton";
import Layout from "../Layouts/Layout";

import bannerBackground from "./banner-bg.png";
import styles from "./BannerDesktop.module.sass";
import { bannerCardsHome, type BannerCardSchema } from "./data";

import useAppDispatch from "@/CustomHooks/useAppDispatch";
import { useAppSelector } from "@/CustomHooks/useAppSelector";
import { useHistoryWithUTM } from "@/CustomHooks/useHistoryWithUTM";
import { showModal } from "@/ReduxStore/reducer/ConfigReducer/ConfigReducer";

const authPath = `/user/credit/credit_card/credit_parameters_info`;

interface BannerDesktopProps {
  title?: string;
  bannerCards?: BannerCardSchema[];
  isMobile?: boolean;
}

/* eslint-disable */
const BannerDesktop = memo(
  ({
    bannerCards = bannerCardsHome,
    title = "Кредитная карта 365 дней без %",
    isMobile = false,
  }: BannerDesktopProps) => {
    const [isActiveElement, setActiveElement] = useState<BannerCardSchema>(
      bannerCards[1]
    );
    const dispatch = useAppDispatch();
    const history = useHistoryWithUTM();
    const { isAuth } = useAppSelector((state) => state.session);

    const clickHandler = () => {
      if (isAuth) return history.push(authPath);

      return dispatch(showModal(true, { href: authPath }));
    };

    const bannerCardsStyle = () => {
      let style = styles.bannerCards;

      if (isMobile) {
        return style;
      }

      switch (bannerCards.length) {
        case 5:
          style = styles.bannerCardsMoreFive;
          break;
        case 4:
          style = styles.bannerCardsMorefour;
          break;
        default:
          style = styles.bannerCards;
          break;
      }

      return style;
    };

    return (
      <div className={styles.bannerContainer}>
        <img
          src={bannerBackground}
          className={styles.bannerBackground}
          alt="banner background"
        />
        <Layout>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerContentTitle}>{title}</h1>
            <PressButton
              className={styles.bannerContentButton}
              id="auth_banner"
              type="mainBold"
              text="Оформить карту"
              onClick={clickHandler}
            />
            {isActiveElement.image}
            <div className={bannerCardsStyle()}>
              {bannerCards.map((card) => (
                <BannerCard
                  icon={card.icon}
                  title={card.title}
                  text={card.text}
                  isActive={
                    JSON.stringify(card.image) ===
                    JSON.stringify(isActiveElement.image)
                  }
                  onClick={() => setActiveElement(card)}
                />
              ))}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
);

export default BannerDesktop;

type BannerCardProps = BannerCardSchema & {
  isActive: boolean;
  onClick: () => void;
};

const BannerCard: React.FC<BannerCardProps> = (props) => {
  const { icon, title, text, isActive, onClick } = props;

  const classNamesCardWrapper = [styles.bannerCard];
  if (isActive) classNamesCardWrapper.push(styles.active);

  return (
    <div className={classNamesCardWrapper.join(" ")} onClick={onClick}>
      {icon}
      <h4 className={styles.bannerCardTitle}>{title}</h4>
      <p className={styles.bannerCardText}>{text}</p>
    </div>
  );
};
