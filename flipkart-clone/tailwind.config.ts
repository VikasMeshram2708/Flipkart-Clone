/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss';

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {},
  daisyui: {
    themes: ['black', 'light', 'dark', 'cupcake'],
  },
  plugins: [require('daisyui'), addVariablesForColors],
};
export default config;
