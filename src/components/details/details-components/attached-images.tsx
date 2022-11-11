import { FC } from 'react';
import uuid from 'react-uuid';

interface AttechedImgsProps {
  imgs: string[];
}

const AttechedImgs: FC<AttechedImgsProps> = ({ imgs }) => {
  return (
    <div className="mt-[86px] sm:mt-[135px]">
      <div className="text-[28px] pb-2 text-dark font-bold border-b-[1px] border-dark/20 mb-4">
        Atteched images
      </div>
      <div className="flex flex-wrap gap-2 sm:flex-nowrap overflow-auto">
        {imgs.map((img) => (
          <img
            key={uuid()}
            src={`${img}?random=${uuid()}`}
            alt="AttechedImgs"
            className="min-w-[200px] h-32 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export { AttechedImgs };
