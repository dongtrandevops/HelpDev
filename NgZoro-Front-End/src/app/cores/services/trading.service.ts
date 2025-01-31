import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  controllerName: string = 'trading';

  constructor(
    private http: HttpClient
  ) { }

  importHistory(model: any) {
    return this.http.post(`${environment.helpDevApi}/${this.controllerName}/import-history`, model);
  }
}
