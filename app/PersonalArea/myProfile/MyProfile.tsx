import React from 'react';

import { creditTarget } from '@/Common/AppFormHelpers/DropdownLists';
import { analyzeCreditTarget } from '@/Common/AppFormHelpers/Helpers';
import PressButton from '@/Components/Buttons/PressButton';
import { Grid, GridItem } from '@/Components/Grid/Grid';
import { DataElement } from '@/Components/Inputs/Types/InputPropsType';
import Layout from '@/Components/Layouts/Layout';
import Wrapper from '@/Components/Layouts/Wrapper';
import { Prompt } from '@/Components/Messages/Prompt';
import Title from '@/Components/Text/Title/Title';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { App } from '@/ProjectTypes/AppTypes';
import { AppFormActions } from '@/ReduxStore/reducer/Validator/ValidatorReducer';
import '@/ProjectStyles/input.sass';

const MyProfile: React.FC = () => {
  const history = useHistoryWithUTM();
  const dispatch = useAppDispatch();
  const resolution = useAppSelector(state => state.config.viewport);
  const handleChange = (item: DataElement<App.CreditProduct>) => {
    dispatch(AppFormActions.setValidatorMode('change_anketa'));
    dispatch(AppFormActions.setApplicationStep('credit_parameters_info'));
    dispatch(
      AppFormActions.updateCreditProduct({
        value: item,
        touched: true,
      }),
    );

    history.push(`/user/change_anketa/${item.value}`);
  };

  return (
    <>
      {resolution !== 'mobile' ? (
        <Layout>
          <Wrapper>
            <Prompt
              title="Анкета"
              titleStyle={{ textAlign: 'center', marginBottom: 16 }}
              suggestionContent={[
                'Вы можете продолжить заполнение анкеты с того места, на котором остановились или отредактировать уже имеющуюся.',
              ]}
              containerStyle={{ marginBottom: 16 }}
              suggestionItemStyle={{ width: '100%', textAlign: 'center' }}
            />
            <Grid
              container
              direction="row"
              justify="space-around"
              align="stretch"
              alignSpace={20}
              space={20}
            >
              {creditTarget.map((product, index) => (
                <GridItem
                  colDesktop={4}
                  colTablet={4}
                  colMobile={12}
                  key={`product_${index + 1}`}
                >
                  <PressButton
                    type="mainBold"
                    text={`Оформить ${analyzeCreditTarget(
                      product.value,
                      'title_parental_case',
                    )}`}
                    onClick={() => handleChange(product)}
                  />
                </GridItem>
              ))}
            </Grid>
          </Wrapper>
        </Layout>
      ) : (
        <Layout>
          <Wrapper>
            <Title
              titleMargins={{
                desktop: { bottom: 24 },
                tablet: { bottom: 24 },
                mobile: { bottom: 16 },
              }}
              titleTextAlign={{ desktop: 'left', tablet: 'left', mobile: 'left' }}
            >
              Анкета
            </Title>
            <p className="description-text fs-18-16-13 color-black-main mb-16">
              Вы можете продолжить заполнение анкеты с того места, на котором остановились
              или отредактировать уже имеющуюся.
            </p>
            <Grid
              container
              direction="row"
              justify="space-around"
              align="center"
              alignSpace={8}
              space={20}
            >
              {creditTarget.map((product, index) => (
                <GridItem
                  colDesktop={4}
                  colTablet={4}
                  colMobile={12}
                  key={`product_${index + 1}`}
                >
                  <PressButton
                    type="smallMainBold"
                    text={`Оформить ${analyzeCreditTarget(
                      product.value,
                      'title_parental_case',
                    )}`}
                    onClick={() => handleChange(product)}
                  />
                </GridItem>
              ))}
            </Grid>
          </Wrapper>
        </Layout>
      )}
    </>
  );
};

export default MyProfile;
