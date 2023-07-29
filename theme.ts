import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-primary': '#C10206',
  '--my-secondary': '#211D21',
  '--my-accent': '#A50113',
  '--my-neutral': '#DFE2DB',
  '--my-base-100': '#FFFBF2',
  '--my-white': '#FFFBF2',
  '--my-black': '#1a1a1a',
  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-secondary'],
  '--component-text-color': props['--my-neutral'],

  /* Brand */
  '--brand-primary': props['--my-primary'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-accent'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  '--focus-color': props['--my-primary'],
});
