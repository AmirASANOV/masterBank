import { ReactElement } from 'react';

export type AccordionPropsType = {
  readonly title: string;
  children: ReactElement;
  className?: string;
};
