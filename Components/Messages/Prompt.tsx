import React, { CSSProperties, memo, useState } from 'react';

import Subtitle from '../Text/Subtitle/Subtitle';
import Title from '../Text/Title/Title';
import { SubTitleProps, TitleProps } from '../Text/Types/Types';

interface PromptProps
  extends TitleProps<HTMLHeadingElement>,
    SubTitleProps<HTMLSpanElement> {
  containerId?: string;
  title?: string;
  subtitle?: string;
  containerStyle?: CSSProperties;
  suggestionContent?: Array<string>;
  suggestionItemClassName?: string;
  suggestionItemStyle?: CSSProperties;
  suggestionContainerClassName?: string;
  suggestionContainerStyle?: CSSProperties;
  showClose?: boolean;
  fullGrid?: boolean;
  animationKeyFrame?: string;
  animationDuration?: number;
}

export const Prompt: React.FC<PromptProps> = memo(
  ({
    containerId,
    title,
    suggestionContent,
    suggestionContainerClassName,
    titleClassName,
    suggestionItemClassName,
    suggestionContainerStyle,
    suggestionItemStyle,
    titleStyle,
    children,
    animationDuration,
    animationKeyFrame,
    fullGrid,
    containerStyle,
    titleRef,
    titleType,
    subtitleClassName,
    subtitleType,
    subtitle,
    subtitleRef,
    subtitleStyle,
    subtitlePaddings,
    subtitleMargins,
    titlePaddings,
    titleMargins,
    titleTextAlign,
    subtitleTextAlign,
  }) => {
    const [state] = useState(true);

    return (
      <>
        {state ? (
          <div
            id={containerId}
            style={{
              width: '100%',
              animation: animationKeyFrame
                ? `${animationKeyFrame} ${animationDuration || 0.5}s ease-out forwards`
                : 'none',
              ...containerStyle,
            }}
            data-full-grid={fullGrid ? 'true' : ''}
          >
            {title ? (
              <Title
                titleType={titleType}
                titleRef={titleRef}
                titleClassName={titleClassName || 'header-24'}
                titleStyle={titleStyle || {}}
                titlePaddings={titlePaddings}
                titleMargins={titleMargins}
                titleTextAlign={titleTextAlign}
              >
                {title}
              </Title>
            ) : (
              ''
            )}

            {subtitle ? (
              <Subtitle
                subtitleType={subtitleType}
                subtitleRef={subtitleRef}
                subtitleStyle={subtitleStyle}
                subtitlePaddings={subtitlePaddings}
                subtitleMargins={subtitleMargins}
                subtitleClassName={subtitleClassName || 'subtitle'}
                subtitleTextAlign={subtitleTextAlign}
              >
                {subtitle}
              </Subtitle>
            ) : (
              ''
            )}

            {suggestionContent || children ? (
              <div
                className={suggestionContainerClassName || 'suggestion-info'}
                style={suggestionContainerStyle || {}}
              >
                <ul style={{ listStyle: 'none' }}>
                  {suggestionContent?.map((suggestionText: string, index) => (
                    <div key={`suggestion_item_container-${index + 1}`}>
                      {suggestionText.includes(';;') ? (
                        suggestionText.split(';;').map((item, itemIndex) => (
                          <li
                            key={`suggestion_content_split_index_${itemIndex + 1}_${
                              Math.random() * 10
                            }`}
                            className={suggestionItemClassName || 'suggestion-item'}
                            style={suggestionItemStyle || {}}
                          >
                            {item || ''}
                            <br />
                          </li>
                        ))
                      ) : (
                        <li
                          key={`suggestion_content_index_${index + 1}_${
                            Math.random() * 10
                          }`}
                          className={suggestionItemClassName || 'suggestion-item'}
                          style={suggestionItemStyle || {}}
                        >
                          {suggestionText || ''}
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
                {children}
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </>
    );
  },
);
