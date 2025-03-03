import React from 'react';

interface Props {}
const TotalNights: React.FC<Props> = ({}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 ml-5 h-[149px] w-[158px] text-center">
      <div className="text-base font-manrope text-brand-primary-900 font-bold">Total Nights</div>
      <div className="text-[39px] font-manrope text-brand-primary-900 font-light mt-4">02</div>
    </div>
  );
};

export default TotalNights;
