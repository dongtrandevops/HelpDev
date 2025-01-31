import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CRAWLER_API, ENTITY_NAME } from '../constants/token';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService<T> {
  constructor(
    @Inject(CRAWLER_API)
    private crawlerApi: string,
    @Inject(ENTITY_NAME)
    private entityName: string,
    
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<T[]>(`${this.crawlerApi}/${this.entityName}`);
  }

  // update(model: WebsiteDTO, id: number) {
  //     return this.http.put(`${environment.crawlerApi}/websites/${id}`, model);
  // }

  // updateRange(models: WebsiteDTO[]) {
  //     return this.http.put(`${environment.crawlerApi}/websites`, models);
  // }

  // add(model: WebsiteDTO) {
  //     return this.http.post(`${environment.crawlerApi}/websites`, model);
  // }
}