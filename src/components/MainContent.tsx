import React from 'react';
import BlackCard from './BlackCard';
import TotalUpoints from './TotalUpoints';
import TotalNights from './TotalNights';
import PointsExpring from './PointsExpring';
import TabComponent from './TabComponent/TabComponent';
import LatestOfferComponent from './LatestOffersComponent/LatestOfferComponent';

type Props = {};

const MainContent: React.FC<Props> = (props: Props) => {
  return (
    <div className=" flex justify-center items-center bg-swirt-50 py-[72px]">
      <div>
        {/* Heading  */}
        <div className="text-brand-primary-900 font-manrope">
          <div className="text-3xl">John Smith</div>
          <div className="text-sm">444401001715</div>
        </div>

        {/* 2nd part  */}
        <div className="flex items-end">
          <BlackCard />
          <TotalUpoints />
          <TotalNights />
          <PointsExpring />
        </div>
        <TabComponent />
        <LatestOfferComponent />
      </div>
    </div>
  );
};

export default MainContent;
