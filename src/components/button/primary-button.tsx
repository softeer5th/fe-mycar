type PrimaryButtonProps = {
  text: string;
  onButtonClick: () => void;
};

const PrimaryButton = ({ text, onButtonClick }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onButtonClick}
      className=" w-full h-[50px] bg-[#002c5f] text-[#fff] text-[16px] font-medium border-0 "
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
