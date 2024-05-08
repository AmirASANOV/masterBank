import React, { CSSProperties } from 'react';

interface RenderInputMessageProps {
  message: string;
  status?: boolean;
  inputMessagesStyle?: CSSProperties;
}

/**
 * @displayName RenderInputMessage - Самостоятельный компонент для Отображения сообщения ошибки/успеха/подсказки
 * @param message - Текст сообщения
 * @param status - Статус ошибки / успеха / подсказки
 * */

export const RenderInputMessage: React.FC<RenderInputMessageProps> = ({
  message,
  status,
  inputMessagesStyle,
}) => (
  <>
    {message.length > 0 ? (
      status === false ? (
        <span className="span-error" style={inputMessagesStyle}>
          {message}
        </span>
      ) : status === true || status === undefined ? (
        <span className="span-hint" style={inputMessagesStyle}>
          {message}
        </span>
      ) : (
        ''
      )
    ) : (
      ''
    )}
  </>
);
