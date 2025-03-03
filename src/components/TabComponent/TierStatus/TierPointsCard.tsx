import React from 'react';

type Props = {};

const TierPointsCard = (props: Props) => {
  return (
    <div className="bg-white rounded-xl w-full p-8">
      <div className="font-manrope font-bold text-base">Tier Points</div>
      <div className="mt-4 text-[39px] font-manrope font-light text-brand-primary-900">324</div>
      <div className="w-full bg-brand-primary-100 rounded-full h-3 mt-8">
        <div className="bg-brand-secondary-500 h-3 rounded-full" style={{ width: `${20}%` }}></div>
      </div>
      <div className="flex justify-between text-sm mt-5">
        <div>
          <p className="font-bold text-base font-manrope">Black</p>
          <div className="text-brand-primary-900 font-normal text-sm">As soon as </div>
          <div className="text-brand-primary-900 font-normal text-sm">you join</div>
        </div>
        <div className="text-right">
          <p className="font-bold text-base font-manrope">Silver</p>
          <div className="text-brand-primary-900 font-normal text-sm">
            From 10 Nights or
            <div className="text-brand-primary-900 font-normal text-sm">10,000 Tier Points</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierPointsCard;
