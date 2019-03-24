import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { BithumbService } from './bithumb.service';
import { interval, timer } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

const newLocal = `
    빗섬 비트코인 가격 : {{ bitcoinPrice }}
    <mat-slide-toggle (change)='changed()'>켜기</mat-slide-toggle>
  `;

@Component({
  selector: 'app-bithumb',
  // template: newLocal,
  templateUrl: './bithumb.component.html',
  styleUrls: ['./bithumb.component.scss']
})
export class BithumbComponent implements OnInit, OnDestroy {

  bitcoinPrice: string;
  private subscription: Subscription; // 구독 해제을 위해 필요
  checked = false;

  constructor(private bithumbService: BithumbService) { }

  ngOnInit() {

  }
  // 화면이 교체되면 unsubscribe 실행함.
  ngOnDestroy() {
    // 구독 해제
    this.subscription.unsubscribe();
  }

  startSubscribe() {
    this.subscription = timer(0, 5000) // interval(5000)
    .pipe(
      switchMap(() => this.bithumbService.getBithumbJson())
    )
    .subscribe(res => {
      console.log(res);
      this.bitcoinPrice = res.average_price;
    });
  }
  changed() {
    if (this.checked === true) {
      this.subscription.unsubscribe();
      this.checked = false;
    }
    else {
      this.startSubscribe();
      this.checked = true;
    }
  }
}
