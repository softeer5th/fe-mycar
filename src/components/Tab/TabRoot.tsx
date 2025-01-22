import TabProvider from '../../providers/TabProvider';

const TabRoot = ({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: React.ReactNode;
}) => {
  return <TabProvider defaultValue={defaultValue}>{children}</TabProvider>;
};

export default TabRoot;
