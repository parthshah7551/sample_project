import React from 'react';

type Props = {};

const PointsExpring: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 ml-5 h-[149px] w-[395px]">
      <div className="text-base font-manrope text-brand-primary-900 font-bold">
        Points Expiring in<a className="text-brand-secondary-500 underline pl-2 font-semibold">March 2024</a>
      </div>
      <div className="text-[39px] font-manrope text-brand-primary-900 font-light mt-4">0</div>
    </div>
  );
};

export default PointsExpring;
