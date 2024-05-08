import React, { memo } from 'react';

interface EmptyMessageProps {
  containerClassName?: string;
  message: Array<string>;
  itemClassName?: string;
}

export const EmptyMessage: React.FC<EmptyMessageProps> = memo(
  ({ containerClassName, message, itemClassName }) => (
    <div className={containerClassName || 'empty-container'}>
      {message.length > 1 ? (
        <ul>
          {message.map(item => (
            <li
              className={itemClassName || 'span-hint'}
              key={`empty_message_${message}`}
              style={{ textAlign: 'center' }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : message.length === 1 ? (
        <span className={itemClassName || 'span-hint'} style={{ textAlign: 'center' }}>
          {message}
        </span>
      ) : (
        ''
      )}
    </div>
  ),
);
