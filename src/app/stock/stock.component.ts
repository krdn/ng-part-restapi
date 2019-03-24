import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  constructor(private strockServive: StockService) { }
  private subscription: Subscription; // 구독 해제을 위해 필요
  checked = false;

  stockCode: string;
  // stockCode2 = 'aaa';
  stockInfo: string;

  ngOnInit() {
    this.stockInfo = '';
    this.stockCode = '005930';
    // this.startSubscribe('005930', 'tWsiJ0%2FIv8UPsZBR8SgjpY%2FC1csSnzlZekS3QxfrwIskD57%2FFurR0911bILtteRGyYynZIJcunLNxvseO8%2Buiw%3D%3D');
    // this.http.get('getXmlUrl', { responseType: 'text' }).subscribe(response => {
    //   console.log(response);
    // });

    // this.strockServive.getStock('005930');

    this.subscription = timer(0, 10000) // interval(5000)
    .pipe(
      switchMap(() => this.strockServive.getStock(this.stockCode))
    )
    .subscribe(res => {
      console.log(res);
      this.stockInfo = res.nm + '(' + res.cd + '): ' + res.nv;
      // this.bitcoinPrice = res.average_price;
    });


  }

  // startSubscribe(stockCode: string, securityKey: string) {
  //   this.subscription = timer(0, 5000) // interval(5000)
  //   .pipe(
  //     // switchMap(() => this.strockServive.getStock(stockCode, securityKey))
  //     switchMap(() => this.strockServive.post())

  //   )
  //   .subscribe(res => {
  //     console.log(res);
  //     //this.bitcoinPrice = res.average_price;
  //   });
  // }
}
