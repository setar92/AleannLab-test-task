import { FC } from 'react';

interface DarkButtonProps {
  onClick: () => void;
  text: string;
}

const DarkButton: FC<DarkButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className=" px-[30px] py-[18px] h-13 bg-dark rounded-lg uppercase text-xs text-white font-semibold hover:bg-stars"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { DarkButton };
