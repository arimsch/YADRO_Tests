import { CurrencyQuotes } from './CurrencyQuotes';

export interface Currency {
  quotes: CurrencyQuotes;
  source?: string;
  success?: string;
  timestamp?: number;
}
