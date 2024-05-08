import React, { createElement } from 'react';

import { SubTitleProps } from '../Types/Types';

import { getGutters } from '@/Common/ViewportCommon/ViewportCommon';
import { useAppSelector } from '@/CustomHooks/useAppSelector';

const Subtitle: React.FC<
  SubTitleProps<HTMLSpanElement | HTMLParagraphElement>
> = props => {
  const { viewport } = useAppSelector(state => state.config);
  return createElement(
    props.subtitleType || 'span',
    {
      onClick: props.onClick,
      className: props.subtitleClassName || 'subtitle',
      style:
        props.subtitleMargins || props.subtitlePaddings
          ? {
              ...props.subtitleStyle,
              textAlign: props.subtitleTextAlign
                ? props.subtitleTextAlign[viewport]
                : props.subtitleStyle?.textAlign || 'inherit',
              margin: props.subtitleMargins
                ? getGutters(props.subtitleMargins[viewport])
                : props.subtitleStyle?.margin || null,
              padding: props.subtitlePaddings
                ? getGutters(props.subtitlePaddings[viewport])
                : props.subtitleStyle?.padding || null,
            }
          : {
              ...props.subtitleStyle,
              textAlign: props.subtitleTextAlign
                ? props.subtitleTextAlign[viewport]
                : props.subtitleStyle?.textAlign || 'inherit',
            },
      'data-full-grid': `${props.fullGrid}`,
    },
    props.children,
  );
};

export default Subtitle;
