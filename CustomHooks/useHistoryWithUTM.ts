import { useNavigate, useLocation } from 'react-router-dom';

export type HistoryType = ReturnType<typeof useHistoryWithUTM>;

export const useHistoryWithUTM = () => {
  const history = useNavigate();
  const location = useLocation();

  const methods = {
    push: (pathname: string) => {
      history(`${pathname}${location.search}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    replace: (pathname: string) => {
      history(`${pathname}${location.search}`, { replace: true });
    },
    location,
    returnToBack: () => history(-1),
    scroll: (to: number, options?: { smooth?: boolean; duration?: number }) =>
      window.scrollTo({ top: to, behavior: 'smooth', ...options }),
    reload() {
      window.location.reload();
    },
  };

  return methods;
};

export const removeTokenFromUTM = () => {
  const utm = window.location.search;

  let url;

  if (utm.includes('?token=')) {
    const index = utm.lastIndexOf('?token=');
    url = utm.substring(index, index + 22);
    let newSearch = utm.replace(url, '');
    if (newSearch.includes('&')) {
      newSearch = newSearch.replace('&', '?');
    }
    return window.location.search.replace(window.location.search, newSearch);
  }
  if (utm.includes('&token=')) {
    const index = utm.lastIndexOf('&token=');
    url = utm.substring(index, index + 22);
    return window.location.search.replace(window.location.search, utm.replace(url, ''));
  }

  return undefined;
};
