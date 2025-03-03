import React from 'react';

type Props = {};

const SilverTierCard = (props: Props) => {
  return (
    <div className="bg-white rounded-xl min-w-[648px] p-8 flex flex-col justify-between ml-5">
      <div>
        <div className="flex justify-between">
          <div className="font-manrope font-bold text-base">Unlock Silver Tier Next:</div>
          <a className="text-brand-secondary-500 underline font-semibold"> View Tier Benifits</a>
        </div>
        <div className="mt-4 text-sm font-manrope font-normal text-brand-primary-900 w-[346px]">
          Earn one of the following before 31st December 2024 to unlock the Silver Tier.
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <div className="p-6 bg-brand-accent-50 rounded-xl text-center w-[167px]">
            <div className="uppercase font-manrope font-medium text-xs text-brand-primary-900">Tier Points</div>
            <div className="font-manrope font-light text-[31.3px] text-brand-primary-900">9,676</div>
          </div>
        </div>
        <div>OR</div>
        <div>
          <div className="p-6 bg-brand-accent-50 rounded-xl text-center w-[167px]">
            <div className="uppercase font-manrope font-medium text-xs text-brand-primary-900">Nights</div>
            <div className="font-manrope font-light text-[31.3px] text-brand-primary-900">08</div>
          </div>
        </div>
        <div className="ml-8 h-full bg-black w-full rounded-xl"></div>
      </div>
    </div>
  );
};

export default SilverTierCard;
