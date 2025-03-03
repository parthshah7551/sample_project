// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary-100': '#E8E8E8',
        'brand-primary-200': '#D0CFCE',
        'brand-primary-900': '#2D2A26',
        divider2: '#D0CFCE',
        'swirt-50': '#F6F5F3',
        'brand-secondary-500': '#BD9A5F',
        'brand-accent-50': '#F6F5F3',
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
