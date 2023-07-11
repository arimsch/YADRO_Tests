import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CurrencyService } from '../currency.service';
import { BehaviorSubject } from 'rxjs';
import { CurrencyQuotes } from '../models/CurrencyQuotes';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyItemComponent implements OnInit, OnDestroy {
  @Input() public nameCurrency = '';
  public delay = false;
  public lastCourse = 0;
  public course$ = new BehaviorSubject(0);
  public changing$ = new BehaviorSubject(0);

  constructor(private readonly currencyService: CurrencyService) {}

  ngOnInit() {
    setTimeout(() => {
      this.delay = true;
    }, 5000);
    this.currencyService.currencies$.subscribe(data => {
      this.lastCourse = this.course$.value;
      this.course$.next(
        1 / data[(`RUB` + this.nameCurrency) as keyof CurrencyQuotes]
      );
      this.changing$.next(this.course$.value - this.lastCourse);
    });
  }

  ngOnDestroy() {
    this.currencyService.currencies$.unsubscribe();
  }
}
