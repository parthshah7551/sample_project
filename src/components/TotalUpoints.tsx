import React from 'react';

type Props = {};

const TotalUpoints: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-[149px] ml-5">
      <div className="text-base font-manrope text-brand-primary-900 font-bold">Total Upoints</div>
      <div className="flex items-center mt-4">
        <span className="text-[39px] font-manrope text-brand-primary-900 font-light">518</span>
        <div className="border-l border-divider2 h-11 mx-4"></div>
        <div className="text-lg">
          <span className="block text-brand-primary-900 font-manrope font-normal text-sm">Worth</span>
          <span className="text-brand-primary-900 font-manrope font-bold text-lg">AED 51</span>
        </div>
      </div>
    </div>
  );
};

export default TotalUpoints;
