import React from 'react';
import LatestOfferHeaderComponent from './LatestOfferHeaderComponent';
import OfferCard from './OfferCard';

type Props = {};

const LatestOfferComponent = (props: Props) => {
  return (
    <>
      <LatestOfferHeaderComponent />
      <div className="mt-5 flex gap-6">
        <OfferCard imgSrc="/assets/latest-offer-image-1.png" />
        <OfferCard imgSrc="/assets/latest-offer-image-2.png" />
        <OfferCard imgSrc="/assets/latest-offer-image-3.png" />
      </div>
    </>
  );
};

export default LatestOfferComponent;
