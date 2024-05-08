import { useEffect, useState } from 'react';

import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { getUrlSearchParams } from '@/Common/AppFormHelpers/Helpers';

export interface UtmParams {
  free_period: Nullable<string>;
  limit: Nullable<string>;
}

export const useUTM = (): UtmParams => {
  const [utm, setUtm] = useState<UtmParams>({
    free_period: null,
    limit: null,
  });

  useEffect(() => {
    const free_period = getUrlSearchParams('free_period');
    const limit = getUrlSearchParams('limit');
    setUtm({
      free_period: free_period || '160',
      limit: limit ? Number(limit).toLocaleString('ru-RU') : '1 000 000 ',
    });
  }, []);

  return utm;
};
