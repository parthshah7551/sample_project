import React, { useState } from 'react';
import TierStatus from './TierStatus/TierStatus';

type Props = {};

type Tab = {
  id: string;
  label: string;
  component?: any;
};

const TabComponent: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<string>('tierStatus');

  const tabs: Tab[] = [
    { id: 'tierStatus', label: 'Tier Status', component: <TierStatus /> },
    { id: 'activity', label: 'Activity', component: <></> },
    { id: 'preferences', label: 'Preferences', component: <></> },
    { id: 'profile', label: 'Profile', component: <></> },
  ];

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  return (
    <div className="mt-18_2xl2">
      <div className="mb-4 border-b">
        <ul className="flex flex-wrap gap-8" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} role="presentation">
              <button
                className={`inline-block px-3 py-5 border-b-2 rounded-t-lg font-normal text-lg ${
                  activeTab === tab.id
                    ? 'text-brand-secondary-500 border-brand-secondary-500'
                    : 'text-brand-primary-900 hover:text-gray-600 border-transparent hover:border-gray-300'
                }`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`mt-12 ${activeTab === tab.id ? '' : 'hidden'}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
