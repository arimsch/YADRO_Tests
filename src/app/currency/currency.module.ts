import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [CurrencyComponent],
  exports: [CurrencyComponent],
  imports: [CommonModule,
    TuiButtonModule],
})
export class CurrencyModule {}
