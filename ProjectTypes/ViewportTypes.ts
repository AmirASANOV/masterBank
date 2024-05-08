import { Viewport } from '../ReduxStore/reducer/ConfigReducer/ConfigTypes';

export interface GutterBase {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export type ViewportConstructor<T> = {
  [key in Viewport]?: T;
};
