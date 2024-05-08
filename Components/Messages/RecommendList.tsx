import React, { memo, ReactNode } from 'react';

import { Lamp } from '../Icons/Lamp';
import Wrapper from '../Layouts/Wrapper';

import { Current, currentDomain } from '@/GlobalConfig';

interface ReccomendedContainerProps {
  description?: Array<string>;
  title?: string;
  renderFooter?: boolean;
  renderHeader?: boolean;
  containerClassName?: string;
  body?: ReactNode;
  icon?: ReactNode;
}

export const RecommendList: React.FC<ReccomendedContainerProps> = memo(
  ({ title, renderFooter, body, icon }) => (
    <Wrapper>
      <div className="container-flex-center-row mb-16">
        {icon || <Lamp color={Current.lampColor[currentDomain]} />}
        {title ? <div className="fs-24-20-18">{title}</div> : ''}
      </div>
      {body || ''}
      {renderFooter ? <div className="reccomended-Footers" /> : ''}
    </Wrapper>
  ),
);
