/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';

import { EmpoymentButton, BenefitButton } from '..';

interface AdditionalInfoProps {
  employments: string[];
  benefits: string[];
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ employments, benefits }) => {
  return (
    <div className="mt-[86px]">
      <div className="text-[28px] text-dark font-bold border-b-[1px] border-dark/20 mb-4">
        Additional info
      </div>
      <div className="text-lg font-normal text-dark mb-3">Employment type</div>
      <div className="flex flex-wrap gap-2">
        {employments.map((emp) => (
          <EmpoymentButton key={emp} onClick={(): void => {}} text={emp} />
        ))}
      </div>
      <div className="text-lg font-normal text-dark mt-6 mb-3">Benefits</div>
      <div className="flex flex-wrap gap-2">
        {benefits.map((ben) => (
          <BenefitButton key={ben} onClick={(): void => {}} text={ben} />
        ))}
      </div>
    </div>
  );
};

export { AdditionalInfo };
