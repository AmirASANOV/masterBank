import React from 'react';

import useSessionSelector from '../Hooks/useSessionSelector';

import CodeSmsTimer from './CodeSmsTimer';

interface CodeRequestAgainProps {
  modal: {
    updateCode: (phone: string) => void;
  };
  phoneNumber: string | null | undefined;
  waitingSms: boolean;
  token: string | null;
}

const CodeRequestAgain: React.FC<CodeRequestAgainProps> = ({
  modal,
  phoneNumber,
  waitingSms,
  token,
}) => {
  const { code } = useSessionSelector();
  return (
    <>
      {(!token || (token && !code)) && (phoneNumber?.length === 11 || waitingSms) && (
        <CodeSmsTimer onClick={() => modal.updateCode(phoneNumber || '')} />
      )}
    </>
  );
};

export default CodeRequestAgain;
