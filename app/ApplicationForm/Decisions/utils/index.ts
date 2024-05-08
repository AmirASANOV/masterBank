import { MfoNameType } from '../types';

import { MFOResponse } from '@/ReduxStore/reducer/AppDecisions/AppDecisionsTypes';

export const mfoNameFiltering = (mfoArray: MFOResponse, sorted: Array<MfoNameType>) =>
  mfoArray?.filter(mfo => sorted.includes(mfo.name as MfoNameType));
