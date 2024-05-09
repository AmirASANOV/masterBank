"use client";

import React, { lazy } from "react";

import Preloader from "@/Components/Preloader/Preloader";
import { WithSuspense } from "@/Components/Suspense/WithSuspense";
import { useAppSelector } from "@/CustomHooks/useAppSelector";

const HomePageDesktop = lazy(() => import("./HomePageDesktop"));
const HomePageMobile = lazy(() => import("./HomePageMobile"));

const HomePage: React.FC = () => {
  const viewport = useAppSelector((state) => state.config.viewport);

  return (
    <>
      {viewport !== "mobile" ? (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <HomePageDesktop />
        </WithSuspense>
      ) : (
        <WithSuspense
          fallBack={<Preloader message="Загрузка страницы..." type="future" />}
        >
          <HomePageMobile />
        </WithSuspense>
      )}
    </>
  );
};

export default HomePage;
