import { FC } from 'react';

import { leftArrowIcon } from '../../assets';

interface ReturnButtonProps {
  onClick: () => void;
  text: string;
}

const ReturnButton: FC<ReturnButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="flex align-middle px-[30px] py-[18px] h-13 bg-neutral-400/70 rounded-lg uppercase text-xs text-dark font-semibold hover:bg-neutral-400"
      onClick={onClick}
    >
      <img src={leftArrowIcon} alt="angleLeftIcon" />
      <span className="ml-5 mt-[2px]">{text}</span>
    </button>
  );
};

export { ReturnButton };
