/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  daisyui: {
    themes: ['black', 'light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui')],
};
export default config;
