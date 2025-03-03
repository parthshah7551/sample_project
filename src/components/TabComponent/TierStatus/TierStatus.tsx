import React from 'react';
import TierPointsCard from './TierPointsCard';
import SilverTierCard from './SilverTierCard';

type Props = {};

const TierStatus = (props: Props) => {
  return (
    <div className="flex w-full">
      <TierPointsCard />
      <SilverTierCard />
    </div>
  );
};

export default TierStatus;
