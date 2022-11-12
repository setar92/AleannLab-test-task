import { FC } from 'react';

interface DescriptionsProps {
  descriptions: string;
}

const Descriptions: FC<DescriptionsProps> = ({ descriptions }) => {
  const main = descriptions.split('Responsopilities:')[0];
  const responsopilities = descriptions
    .split('Responsopilities:')[1]
    .split('Compensation & Benefits:')[0];
  const compensation = descriptions
    .split('Responsopilities:')[1]
    .split('Compensation & Benefits:')[1]
    .split('.');
  compensation.pop();
  return (
    <div>
      <div className="my-1">{main}</div>
      <div className="text-dark font-bold text-xl mt-8">Responsopilities</div>
      <div className="mt-4 sm:mt-2"> {responsopilities} </div>
      <div className="text-dark font-bold text-xl mt-8 sm:mt-4">
        Compensation & Benefits
      </div>
      <ul className="list-none mt-4">
        {compensation &&
          compensation.map((it, index) => (
            <li
              className=" before:content-['■'] before:text-dark/60"
              key={index}
            >
              {it}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Descriptions };
