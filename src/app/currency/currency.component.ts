import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyComponent {
  @Input() public nameCurrency = '';
  private sourceTime = timer(0, 1000);
  private sourceTimeFetch = timer(0, 10000);
  public expanded = false;
  public data$ = new BehaviorSubject(Date.now());

  constructor(private readonly currencyService: CurrencyService) {
    this.sourceTime.subscribe(() => {
      this.data$.next(Date.now());
    });
    this.sourceTimeFetch.subscribe(() => {
      this.currencyService.fetchCourse();
    });
  }

  public toggle(): void {
    this.expanded = !this.expanded;
  }
}
