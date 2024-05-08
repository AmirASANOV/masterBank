import React, { memo } from 'react';

import Wrapper from '../Layouts/Wrapper';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Notice: React.FC<Props> = memo(({ title, children }) => (
  <Wrapper style={{ padding: '12px 8px' }}>
    {title ? (
      <div className="container-flex-start-row">
        <h2 className="fs-24-20-18 mb-16">{title}</h2>
      </div>
    ) : (
      ''
    )}
    {React.Children.map(children, (child, index) => (
      <div className="notice-item" key={`child_${index + 1}`}>
        {child}
      </div>
    ))}
  </Wrapper>
));

export default Notice;
