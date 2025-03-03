import React from 'react';
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-[150px]  bg-white">
      <div className="pt-16 pb-[56px] flex justify-between">
        <LeftFooter />
        <RightFooter />
      </div>
      <div className="border"></div>
      <div className="flex justify-between py-10 ">
        <div className="flex">
          <img src="/assets/emaar-text-logo.svg" alt="Your Icon" />
          <span className="ml-8 font-manrope font-normal text-brand-primary-900 text-base">
            View All Group Entities
          </span>
        </div>
        <div className="font-manrope font-normal text-brand-primary-900 text-sm">
          Copyright © Emaar Properties PJSC. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
