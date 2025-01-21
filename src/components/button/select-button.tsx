type SelectButtonProps = {
  text: string;
  isActive: boolean;
};

const SelectButton = ({ text, isActive }: SelectButtonProps) => {
  return (
    <button
      className={` h-4 leading-none text-base  ${isActive ? ' text-[#007fa8]' : 'text-[#666]'}`}
    >
      {text}
    </button>
  );
};

export default SelectButton;
