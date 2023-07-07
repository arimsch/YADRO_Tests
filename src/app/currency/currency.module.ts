import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';

@NgModule({
  declarations: [CurrencyComponent],
  exports: [CurrencyComponent],
  imports: [CommonModule],
})
export class CurrencyModule {}
