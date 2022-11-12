import { FC } from 'react';

interface ApplyButtonProps {
  onClick: () => void;
  text: string;
}

const ApplyButton: FC<ApplyButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className=" px-[30px] py-[18px] h-13 bg-dark rounded-lg uppercase text-xs text-white font-semibold hover:bg-slate-900"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { ApplyButton };
