import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  constructor(
    private http: HttpClient
  ) { }

  importHistory(model: any) {
    return this.http.post(`${environment.helpdevApi}/trading/import-history`, model);
  }
}
