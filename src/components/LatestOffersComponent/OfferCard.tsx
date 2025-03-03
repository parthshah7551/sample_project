import React from 'react';

type Props = {
  imgSrc: string;
};

const OfferCard = (props: Props) => {
  return (
    <div className="relative w-[376px]">
      <img src={props.imgSrc} alt="Dining Offer" className=" w-full h-[380px] rounded-2xl shadow-lg" />
      <span className="absolute top-4 right-4 bg-brand-accent2-500 text-white text-xs px-3 py-2 font-bold rounded-full border border-brand-secondary-300">
        DINE
      </span>
      <div className="pt-4 pr-4">
        <p className="text-base text-brand-secondary-500 font-bold font-manrope">Up to 10% off</p>
        <h3 className="text-lg font-bold mt-2 font-manrope text-brand-primary-900">
          72-Hour Eid flash sale at Address Beach Resort
        </h3>
      </div>
    </div>
  );
};

export default OfferCard;
