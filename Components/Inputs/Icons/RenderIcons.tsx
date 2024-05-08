import React, { CSSProperties, Ref, forwardRef } from 'react';

import { Accept } from '../../Icons/Accept';
import { HandsetPhone } from '../../Icons/HandsetPhone';
import { Reject } from '../../Icons/Reject';
import { Sms } from '../../Icons/Sms';

import { currentDomain } from '@/GlobalConfig';
import { PartnerStatus } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

export type statusTypes =
  | boolean
  | undefined
  | 'waiting'
  | 'success'
  | 'error'
  | 'reject'
  | 'not imploying'
  | 'APPROVED'
  | PartnerStatus;

interface RenderIconProps {
  status: statusTypes;
  field: 'dropdown' | 'text';
  style?: CSSProperties;
  waiting?: boolean;
  className?: string;
}

/**
 * @displayName RenderIcon - Самостоятельный компонент для отображения иконки внутри инпута
 * @param status - Статус true/false для отображения статуса валидности поля ввода
 * @param field - Тип поля - выпадающий список или текстовое поле
 * */

export const RenderIcon = forwardRef(
  ({ status, style, className, field }: RenderIconProps, ref: Ref<HTMLSpanElement>) => (
    <>
      {status === 'waiting' ? (
        <span className={`lds-ring ${className}`} style={style} ref={ref}>
          <span
            style={
              style
                ? {
                    width: style?.width,
                    height: style?.height,
                  }
                : {}
            }
          />
          <span
            style={
              style
                ? {
                    width: style.width,
                    height: style.height,
                  }
                : {}
            }
          />
          <span
            style={
              style
                ? {
                    width: style.width,
                    height: style.height,
                  }
                : {}
            }
          />
          <span
            style={
              style
                ? {
                    width: style.width,
                    height: style.height,
                  }
                : {}
            }
          />
        </span>
      ) : status === true ? (
        <span style={style || {}} className="icon-complete" ref={ref} />
      ) : status === false ? (
        <span style={style || {}} className={`icon-error ${currentDomain}`} ref={ref} />
      ) : status === undefined && field === 'dropdown' ? (
        <span style={style || {}} className="icon" ref={ref} />
      ) : status === 'APPROVED' ? (
        <Accept />
      ) : status === 'CALL' ? (
        <HandsetPhone />
      ) : status === 'SMS' ? (
        <Sms />
      ) : status === 'REJECTED' ? (
        <Reject />
      ) : (
        ''
      )}
    </>
  ),
);
