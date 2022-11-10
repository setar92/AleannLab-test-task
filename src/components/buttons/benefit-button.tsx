import { FC } from 'react';

interface BenefitButtonProps {
  onClick: () => void;
  text: string;
}

const BenefitButton: FC<BenefitButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="w-52 h-12 mr-2 bg-benefitBtn/30 hover:bg-benefitBtn/50 rounded-lg text-[#988B49] text-base font-bold border-2 border-benefitBtn/50 sm:h-12 align-middle sm:px-2 sm:text-left sm:text-base sm:w-auto"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { BenefitButton };
