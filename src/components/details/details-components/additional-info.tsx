/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';
import uuid from 'react-uuid';

import { EmpoymentButton, BenefitButton } from '../..';

interface AdditionalInfoProps {
  employments: string[];
  benefits: string[];
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ employments, benefits }) => {
  return (
    <div className="mt-[86px]">
      <div className="text-[28px] pb-2 text-dark font-bold border-b-[1px] border-dark/20 mb-4">
        Additional info
      </div>
      <div className="text-lg font-normal text-dark mb-3">Employment type</div>
      <div className="flex flex-wrap gap-2">
        {employments.map((emp) => (
          <EmpoymentButton key={uuid()} text={emp} />
        ))}
      </div>
      <div className="text-lg font-normal text-dark mt-6 mb-3">Benefits</div>
      <div className="flex flex-wrap gap-2">
        {benefits.map((ben) => (
          <BenefitButton key={uuid()} text={ben} />
        ))}
      </div>
    </div>
  );
};

export { AdditionalInfo };
