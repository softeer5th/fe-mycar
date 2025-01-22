import { createContext } from 'react';

interface TabContextProps {
  selectedTab: string;
  handleClickTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TabContext = createContext<TabContextProps | null>(null);
