import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrencyQuotes } from './models/CurrencyQuotes';
import { CurrencyApiService } from './currency-api.services';

const EMPTY_QUOTES: CurrencyQuotes = {
  RUBCNY: 0,
  RUBEUR: 0,
  RUBGBP: 0,
  RUBJPY: 0,
  RUBTRY: 0,
  RUBUSD: 0,
};

@Injectable()
export class CurrencyService {
  public currencies$: BehaviorSubject<CurrencyQuotes> = new BehaviorSubject(
    EMPTY_QUOTES
  );

  constructor(private readonly currencyApiServices: CurrencyApiService) {}

  public fetchCourse(): void {
    this.currencyApiServices
      .getCourse()
      .subscribe(data => this.currencies$.next(data.quotes));
  }
}
