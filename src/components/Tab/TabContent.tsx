import useTabContext from '../../hooks/useTabContext';

const TabContent = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const { selectedTab } = useTabContext();

  const isSelected = value === selectedTab;

  return <div style={{ display: isSelected ? 'block' : 'none' }}>{children}</div>;
};

export default TabContent;
