import React from 'react';

interface Props {} // Define an empty interface for Props

const Navbar: React.FC<Props> = ({}) => {
  // Explicitly type the component with Props
  return (
    <div className="py-4 px-8">
      <div className="container flex justify-between">
        {/* Logo and "BY EMAAR" */}
        <div className="flex items-center">
          <img src="/assets/logo_by_emaar.png" alt="Logo" className="h-16" />

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8 pl-16">
            <a href="#" className="text-base font-manrope text-brand-primary-900 hover:underline">
              Earn & Redeem
            </a>
            <a href="#" className="text-base font-manrope text-brand-primary-900 hover:underline">
              Benefits
            </a>
            <a href="#" className="text-base font-manrope text-brand-primary-900 hover:underline">
              Offers
            </a>
            <a href="#" className="text-base font-manrope text-brand-primary-900 hover:underline">
              Experiences
            </a>
            <a href="#" className="text-base font-manrope text-brand-primary-900 hover:underline">
              Our Credit Cards
            </a>
            <a href="#" className="text-base font-manrope text-brand-primary-900 hover:underline">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <img src="/assets/uae_flag.png" alt="UAE Flag" className="w-5 h-5" />
            <span className="underline text-brand-primary-900 font-semibold">UAE</span>
          </div>
          <div className="border-l border-divider2 h-11"></div>
          <div className="w-11 h-11 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-base">
            JS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
