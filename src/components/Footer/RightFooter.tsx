import React from 'react';

type Props = {};

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}
const RightFooter = (props: Props) => {
  const footerData: FooterColumn[] = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Benefits', href: '#' },
        { label: 'Offers', href: '#' },
        { label: 'Experience', href: '#' },
        { label: 'Partners', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Our Credit Cards', href: '#' },
        { label: 'Partner Enrollment', href: '#' },
      ],
    },
    {
      title: 'About UBE',
      links: [
        { label: 'Blogs', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: "FAQ's", href: '#' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Sitemap', href: '#' },
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-[72px]">
      {footerData.map((column, columnIndex) => (
        <div key={columnIndex}>
          <h3 className="font-bold mb-6 font-manrope text-base text-brand-primary-900">{column.title}</h3>
          <ul className="space-y-4 font-manrope font-normal text-base text-brand-primary-900">
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href} className="text-gray-600 hover:text-gray-800">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RightFooter;
