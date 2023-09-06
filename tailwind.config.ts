import type { Config } from 'tailwindcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import colors from 'tailwindcss/colors';

const navyColor = {
  50: '#E7E9EF',
  100: '#C2C9D6',
  200: '#A3ADC2',
  300: '#697A9B',
  400: '#5C6B8A',
  450: '#465675',
  500: '#384766',
  600: '#313E59',
  700: '#26334D',
  750: 'rgb(34,46,69)',
  800: '#202B40',
  900: '#192132',
};

const customColors = {
  navy: navyColor,
  'slate-150': '#E9EEF5',
  primary: colors.indigo['600'],
  'primary-focus': colors.indigo['700'],
  'secondary-light': '#ff57d8',
  secondary: '#F000B9',
  'secondary-focus': '#BD0090',
  'accent-light': colors.indigo['400'],
  accent: '#5f5af6',
  'accent-focus': '#4d47f5',
  info: colors.sky['500'],
  'info-focus': colors.sky['600'],
  success: colors.emerald['500'],
  'success-focus': colors.emerald['600'],
  warning: '#ff9800',
  'warning-focus': '#e68200',
  error: '#ff5724',
  'error-focus': '#f03000',
};

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...customColors },
    },
  },
  plugins: [],
};
export default config;
