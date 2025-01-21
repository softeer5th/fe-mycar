import useTabContext from '../../hooks/useTabContext';

const TabTrigger = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const { selectedTab, handleClickTab } = useTabContext();

  const isSelected = value === selectedTab;

  return (
    <button value={value} onClick={handleClickTab} data-state={isSelected ? 'active' : 'inactive'}>
      {children}
    </button>
  );
};

export default TabTrigger;
