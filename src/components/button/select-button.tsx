type SelectButtonProps = {
  onSelectClick: () => void;
  text: string;
  isActive: boolean;
};

const SelectButton = ({ onSelectClick, text, isActive }: SelectButtonProps) => {
  return (
    <button
      onClick={onSelectClick}
      className={` h-4 leading-none text-base  ${isActive ? ' text-[#007fa8]' : 'text-[#666]'}`}
    >
      {text}
    </button>
  );
};

export default SelectButton;
