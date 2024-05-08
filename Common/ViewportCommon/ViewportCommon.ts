import { Nullable } from '@/ApiConfig/DadataApi/DadataPropsTypes';
import { GutterBase } from '@/ProjectTypes/ViewportTypes';

export const getGutters = (gutters?: GutterBase): Nullable<string> =>
  gutters
    ? `${gutters?.top || 0}px ${gutters?.right || 0}px ${gutters?.bottom || 0}px ${
        gutters?.left || 0
      }px`
    : null;
