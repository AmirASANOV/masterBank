import React, { useEffect } from 'react';

import { Grid, GridItem } from '@/Components/Grid/Grid';
import useAppDispatch from '@/CustomHooks/useAppDispatch';
import { useAppSelector } from '@/CustomHooks/useAppSelector';
import { removeTokenFromUTM, useHistoryWithUTM } from '@/CustomHooks/useHistoryWithUTM';
import { currentDomain } from '@/GlobalConfig';
import { apiAuthLogOut } from '@/ReduxStore/reducer/userReducer/userReducer';

const NavigationPersonalArea: React.FC = () => {
  const history = useHistoryWithUTM();
  const resolution = useAppSelector(state => state.config.viewport);
  const dispatch = useAppDispatch();
  const [activeLink, changeActiveLink] = React.useState(history.location.pathname);
  const url = history.location.pathname;

  const arrayLinks = [
    {
      url: '/user/myProfile',
      title: 'Моя анкета',
      type: 'nav',
    },
    {
      url: '/user/myApplications',
      title: 'Одобренные заявки',
      type: 'nav',
    },
    {
      url: '/',
      title: 'Выйти',
      type: 'logout',
      component: '',
    },
  ];

  const handleChange = (
    event: React.MouseEvent<HTMLSpanElement | MouseEvent>,
    path: string,
    type: string,
  ) => {
    if (type === 'logout') {
      dispatch(apiAuthLogOut());
      localStorage.removeItem('birthday');
      localStorage.removeItem('phoneNumberFromState');
      localStorage.removeItem('birthDateStatus');
      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('modalClose');
      removeTokenFromUTM();
    }
    history.push(path);
  };

  useEffect(() => {
    changeActiveLink(url);
  }, [url]);

  return (
    <>
      {resolution !== 'mobile' ? (
        <section
          className="container-root"
          style={{ width: '100%', padding: 16, marginBottom: 24 }}
        >
          <Grid container space={0} direction="row" justify="center" align="center">
            {arrayLinks.map((item, index) => (
              <GridItem
                colDesktop={4}
                direction="row"
                justify="center"
                align="center"
                key={`navigation_links_${index + 1}`}
              >
                <span
                  key={`${item.title}_${index + 1}`}
                  className={`text-not-underlined__${currentDomain} ${
                    activeLink === item.url ? 'active' : ''
                  }`}
                  onClick={(event: React.MouseEvent<HTMLSpanElement | MouseEvent>) =>
                    handleChange(event, item.url, item.type)
                  }
                  aria-hidden
                >
                  {item.title}
                </span>
              </GridItem>
            ))}
          </Grid>
        </section>
      ) : (
        <section
          className="container-root"
          style={{ width: '100%', padding: '10px 10px 5px' }}
        >
          <div className="no-scroll-block personal-area-nav">
            {arrayLinks.map((item, index) => (
              <span
                key={`navigation_slide_${index + 1}`}
                style={{ display: 'block', textAlign: 'center', marginLeft: 18 }}
                className={`text-not-underlined__${currentDomain} ${
                  activeLink === item.url ? 'active' : ''
                }`}
                onClick={(event: React.MouseEvent<HTMLSpanElement | MouseEvent>) =>
                  handleChange(event, item.url, item.type)
                }
                aria-hidden
              >
                {item.title}
              </span>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default NavigationPersonalArea;
