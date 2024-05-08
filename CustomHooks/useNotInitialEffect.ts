import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

// Для предотвращения эффектов при первичном рендере
export const useNotInitialEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns;

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }

    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }

    return undefined;
  }, deps);
};
