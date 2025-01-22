import { useState } from 'react';
import { TabContext } from '../contexts/TabContext';

const TabProvider = ({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: React.ReactNode;
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  const handleClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    setSelectedTab(target.value);
  };

  return (
    <TabContext.Provider value={{ selectedTab, handleClickTab }}>{children}</TabContext.Provider>
  );
};

export default TabProvider;
