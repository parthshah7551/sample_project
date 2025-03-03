// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        divider2: '#D0CFCE',
        'swirt-50': '#F6F5F3',
        'brand-primary-100': '#E8E8E8',
        'brand-primary-200': '#D0CFCE',
        'brand-primary-900': '#2D2A26',
        'brand-secondary-300': '#D9C19D',
        'brand-secondary-500': '#BD9A5F',
        'brand-accent-50': '#F6F5F3',
        'brand-accent2-500': '#85754E',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      margin: {
        '18_2xl2': '72px',
      },
      typography: {
        DEFAULT: {
          css: {
            '.heading-text': {
              fontFamily: 'manrope',
              fontWeight: 300,
              fontSize: '31.3px',
            },
          },
        },
      },
    },
  },
};
