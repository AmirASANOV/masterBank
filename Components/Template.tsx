import React from 'react';

import { currentDomain } from '../GlobalConfig';

interface Props {
  children: React.ReactNode;
}

const Template = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div
    ref={ref}
    id={`${Math.random() * 10000000000}`}
    className={`footer-template footer-template__${currentDomain}`}
    style={
      currentDomain === 'new_sobank' && !window.location.pathname.includes('user')
        ? { paddingTop: 32, backgroundColor: '#f3fcfd' }
        : {}
    }
  >
    {props.children}
  </div>
));

export default Template;
