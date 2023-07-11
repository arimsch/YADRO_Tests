import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { CurrencyItemComponent } from './currency-item/currency-item.component';
import { CurrencyService } from './currency.service';
import { CurrencyInterceptorService } from '../core/currency-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CurrencyApiService } from './currency-api.services';

@NgModule({
  declarations: [CurrencyComponent, CurrencyItemComponent],
  exports: [CurrencyComponent],
  imports: [CommonModule, TuiButtonModule, TuiSvgModule],
  providers: [
    CurrencyService,
    CurrencyApiService,
    CurrencyInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CurrencyInterceptorService,
      multi: true,
    },
  ],
})
export class CurrencyModule {}
