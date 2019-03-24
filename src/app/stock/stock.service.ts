import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, take, first, find, last } from 'rxjs/operators';
import { NaverFinance } from './naver-finance';
// import { BithumbData } from './bithumb.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {}

  public getJSON(stockCode: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH',
        'Access-Control-Allow-Credentials': 'false'
      }), data: ''
    };

    // proxy.conf.json
    const apiUrl = '/api/realtime.nhn?query=SERVICE_ITEM:' + stockCode;
    // const apiUrl = 'https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:005930'; // + stockCode;

    return this.http.get(apiUrl, httpOptions);
  }

  // Find 메소트 사용
  getStock(stockCode: string): Observable<NaverFinance> {
    return this.getJSON(stockCode)
      .pipe(
        map(res => res.result.areas[0].datas[0])
      );
  }

  //
  // getBithumbJson(): Observable<any> {
  //   return this.getJSON()
  //     .pipe(
  //       map((res: {data: BithumbData}) => res.data)
  //     );
  // }

}

