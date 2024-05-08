import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@/ReduxStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
