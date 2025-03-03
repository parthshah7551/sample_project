import React from 'react';

type Props = {};

const LatestOfferHeaderComponent = (props: Props) => {
  return (
    <div className="mt-18_2xl2">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <div className="uppercase font-manrope font-medium text-sm text-brand-secondary-500">Our latest offers</div>
          <div className="mt-2 font-manrope font-medium text-[25px] text-brand-primary-900">
            Earn extra points on every spend
          </div>
        </div>
        <button className="border border-brand-primary-900 h-11 rounded-xl px-5 text-sm font-semibold uppercase text-center">
          VIEW ALL OFFERS
        </button>
      </div>
    </div>
  );
};

export default LatestOfferHeaderComponent;
