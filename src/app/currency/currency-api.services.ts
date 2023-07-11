import { Currency } from './models/currency';
import { Observable, catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_COURSE } from '../shared/url-names';

const TO_SYMBOL = 'RUB';
const FROM_SYMBOLS = 'USD,EUR,GBP,CNY,JPY,TRY';
const HANDLE_ERR_CURRENCY: Currency = {
  quotes: {
    RUBCNY: 0,
    RUBEUR: 0,
    RUBGBP: 0,
    RUBJPY: 0,
    RUBTRY: 0,
    RUBUSD: 0,
  },
};

@Injectable()
export class CurrencyApiService {
  constructor(private readonly _http: HttpClient) {}

  public getCourse(): Observable<Currency> {
    return this._http
      .get<Currency>(
        `${URL_COURSE}?source=${TO_SYMBOL}&currencies=${FROM_SYMBOLS}`
      )
      .pipe(
        catchError(
          this.handleError<Currency>('getComments', HANDLE_ERR_CURRENCY)
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
