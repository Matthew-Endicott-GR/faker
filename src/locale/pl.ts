/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import en from '../locales/en';
import pl from '../locales/pl';

export const faker = new Faker({
  locale: 'pl',
  localeFallback: 'en',
  locales: {
    pl,
    en,
  },
});