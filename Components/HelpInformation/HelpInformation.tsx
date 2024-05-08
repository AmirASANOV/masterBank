import React, { memo } from 'react';

import { tabsHome, type Tab } from './Content';
import styles from './HelpInformation.module.sass';

const HelpInformation = ({ tabs = tabsHome }: { tabs?: Tab[] }) => {
  const [activeTab, setActiveTab] = React.useState<Tab>(tabs[0]);

  const getStylesActiveTab = (isActive: boolean) => {
    if (isActive) {
      return {
        color: '#ed3c5b',
        borderBottom: '2px solid #ed3c5b',
      };
    }
    return {};
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Тарифы</h2>
      <div className={styles.linkButtons}>
        {tabs.map(item => (
          <button
            className={styles.buttonToggle}
            onClick={() => setActiveTab(item)}
            style={getStylesActiveTab(item.title === activeTab.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {activeTab.content}
    </div>
  );
};

export default memo(HelpInformation);
