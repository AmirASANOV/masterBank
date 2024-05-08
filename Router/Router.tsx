import React, { memo } from 'react';

import { RouteObject, useRoutes } from 'react-router-dom';

import NotFound from '../Components/Messages/NotFound';
import Preloader from '../Components/Preloader/Preloader';
import DefaultLayout from '../Layouts/DefaultLayout';
import FormLayout from '../Layouts/FormLayout';
import UserLayout from '../Layouts/UserLayout';

import Layout from '@/Components/Layouts/Layout';
import Steps from '@/Components/Steps/Steps';
import { WithSuspense } from '@/Components/Suspense/WithSuspense';

const CreditCashPage = React.lazy(() => import('../Pages/CreditCashPage/CreditCashPage'));
const HomePage = React.lazy(() => import('../Pages/HomePage/HomePage'));
const CreditCardPage = React.lazy(() => import('../Pages/CreditCardPage/CreditCardPage'));
const CarCreditPage = React.lazy(() => import('../Pages/CarCreditPage/CarCreditPage'));

const InstallmentCardPage = React.lazy(
  () => import('../Pages/InstallmentCardPage/InstallmentCardPage'),
);
const MfoPage = React.lazy(() => import('../Pages/MFOPage/MFOPage'));
const HypothecPage = React.lazy(() => import('../Pages/HypothecPage/HypothecPage'));
const CreditParameters = React.lazy(
  () => import('../Pages/ApplicationForm/FormStages/CreditParameters'),
);
const WorkInfo = React.lazy(() => import('../Pages/ApplicationForm/FormStages/WorkInfo'));
const AdditionalInfo = React.lazy(
  () => import('../Pages/ApplicationForm/FormStages/AdditionalInfo'),
);
const PassportInfo = React.lazy(
  () => import('../Pages/ApplicationForm/FormStages/PassportInfo'),
);
const MyProfile = React.lazy(() => import('../Pages/PersonalArea/myProfile/MyProfile'));
const WelcomePage = React.lazy(() => import('../Pages/WelcomePage'));
const Zaimer = React.lazy(
  () => import('../Pages/ApplicationForm/Decisions/marketing/Zaimer/Zaimer'),
);
const Showcase = React.lazy(() => import('../Pages/Showcase/Showcase'));
const ActivateSession = React.lazy(() =>
  import('../Pages/Activate/Session/ActivateSession').then(module => ({
    default: module.ActivateSession,
  })),
);
const Decisions = React.lazy(
  () => import('../Pages/ApplicationForm/Decisions/Decisions'),
);
const Profile = React.lazy(() => import('../Pages/PersonalArea/PersonalAreaMain'));
const HypothecForm = React.lazy(() =>
  import('../Pages/ApplicationForm/HypothecForm/HypothecForm').then(module => ({
    default: module.HypothecForm,
  })),
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'credit_cash/info', element: <CreditCashPage /> },
      { path: 'credit_card/info', element: <CreditCardPage /> },
      { path: 'installment_card/info', element: <InstallmentCardPage /> },
      { path: 'mfo/info', element: <MfoPage /> },
      { path: 'car_credit/info', element: <CarCreditPage /> },
      {
        path: 'hypothec',
        children: [
          { path: '', element: <HypothecForm footer /> },
          { path: 'info', element: <HypothecPage /> },
        ],
      },
      { path: 'zaimerapprove', element: <Zaimer /> },
      { path: 'showcase/mfo?', element: <Showcase /> },
      { path: 'activate/session/:token', element: <ActivateSession /> },
    ],
  },

  {
    path: 'user',
    element: <UserLayout />,
    children: [
      {
        path: ':credit/:product',
        element: <FormLayout />,
        children: [
          {
            path: 'credit_parameters_info',
            element: (
              <Layout style={{ width: '100%', padding: '20px' }}>
                <Steps number={1} bonus={30} />
                <CreditParameters
                  placement="application_form"
                  lsKey="credit_parameters_info"
                />
              </Layout>
            ),
          },
          {
            path: 'work_info/:work?/:employment_type?',
            element: <WorkInfo lsKey="work_info" />,
          },
          {
            path: 'additional_info',
            element: <AdditionalInfo lsKey="additional_info" />,
          },
          { path: 'passport_info', element: <PassportInfo lsKey="passport_info" /> },
          { path: 'decisions/:work?', element: <Decisions /> },
        ],
      },

      {
        path: 'myProfile',
        element: (
          <WithSuspense
            fallBack={<Preloader type="future" message="Загрузка личного кабинет..." />}
          >
            <Profile />

            <MyProfile />
          </WithSuspense>
        ),
      },

      {
        path: 'myApplications',
        element: (
          <WithSuspense
            fallBack={
              <Preloader type="future" message="Загрузка решений по вашей заявке..." />
            }
          >
            <Profile />

            <Decisions />
          </WithSuspense>
        ),
      },

      {
        path: ':page',
        element: (
          <WithSuspense
            fallBack={<Preloader type="future" message="Загрузка страницы..." />}
          >
            <WelcomePage />
          </WithSuspense>
        ),
      },
    ],
  },

  { path: '*', element: <NotFound /> },
];

const Router = () => useRoutes(routes);

export default memo(Router);
