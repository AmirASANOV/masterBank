import React, { createContext } from 'react';

import { useUTM, UtmParams } from '@/CustomHooks/useUTM';

export const UtmContext = createContext<UtmParams>({
  limit: null,
  free_period: null,
});

interface UtmContextProvider {
  children: React.ReactNode;
}

export const UtmContextProvider: React.FC<UtmContextProvider> = ({ children }) => {
  const data = useUTM();
  return <UtmContext.Provider value={data}>{children}</UtmContext.Provider>;
};
