import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyComponent {
  @Input() public nameCurrency = '';
  private sourceTime = timer(0,1000);
  public expanded = false;
  public data = new BehaviorSubject(Date.now());

  constructor(){
    this.sourceTime.subscribe(() => {
      this.data.next(Date.now());
    });
  }

  public toggle(): void {
    this.expanded = !this.expanded;
  }
}
