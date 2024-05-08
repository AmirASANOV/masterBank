import { RefObject, useEffect, useState } from 'react';

export interface IntersectionArgs extends IntersectionObserverInit {
  freezeOnVisible?: boolean;
}

const useRenderObserver = (
  ref: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnVisible = true,
  }: IntersectionArgs,
  callBack?: ([entry]: Array<IntersectionObserverEntry>) => void,
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = !!entry?.isIntersecting && freezeOnVisible;

  const updateView = ([e]: Array<IntersectionObserverEntry>) => {
    setEntry(e);
  };

  useEffect(() => {
    const node = ref?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return undefined;

    const params = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(callBack || updateView, params);

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return {
    entry,
  };
};

export default useRenderObserver;
