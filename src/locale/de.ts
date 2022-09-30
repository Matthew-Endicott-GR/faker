/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import de from '../locales/de';
import en from '../locales/en';

export const faker = new Faker({
  locale: 'de',
  localeFallback: 'en',
  locales: {
    de,
    en,
  },
});