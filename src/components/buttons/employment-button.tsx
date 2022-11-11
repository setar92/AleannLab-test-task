import { FC } from 'react';

interface InfoButtonProps {
  text: string;
}

const EmpoymentButton: FC<InfoButtonProps> = ({ text }) => {
  return (
    <button className="w-52 h-12 mr-2 bg-empoyBtn/30 cursor-auto rounded-lg text-empoyBtn text-base font-bold border-2 border-empoyBtn/50 sm:w-32 sm:h-12 align-middle sm:pl-6 sm:text-base">
      {text}
    </button>
  );
};

export { EmpoymentButton };
