import React from 'react';

import { Grid, GridItem } from '../Grid/Grid';
import { Calendar } from '../Icons/Calendar';
import Layout from '../Layouts/Layout';

import { Current, currentDomain } from '@/GlobalConfig';
import { spacing } from '@/Pages/ApplicationForm/Decisions/DecisionScripts/DecisionScriptsConfig';
import { Viewport } from '@/ReduxStore/reducer/ConfigReducer/ConfigTypes';

export interface HurryUpProps {
  children: React.ReactNode | string;
  viewport: Viewport;
  useMargin?: boolean;
}

export const HurryUp: React.FC<HurryUpProps> = ({ viewport, children, useMargin }) => (
  <Layout
    style={{
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom:
        !!useMargin || useMargin === undefined ? spacing.alignSpace[viewport] : '',
    }}
    background="grayLayout"
  >
    <Grid container gridStyle={{ alignItems: 'center' }}>
      <GridItem colDesktop={12} justify="center" align="center" wrap="nowrap">
        <Calendar
          size={viewport === 'mobile' ? 36 : 50}
          color={Current.pdfColor[currentDomain]}
        />
        <h2 className="header-24" style={{ marginLeft: 20, width: 'fit-content' }}>
          {children}
        </h2>
      </GridItem>
    </Grid>
  </Layout>
);
