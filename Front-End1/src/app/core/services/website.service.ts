
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { WebsiteDTO } from '../models/website.model';

@Injectable({
    providedIn: 'root',
})
export class WebsiteService {
    constructor(
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<WebsiteDTO[]>(`${environment.crawlerApi}/websites`);
    }

    update(model: WebsiteDTO, id: number) {
        return this.http.put(`${environment.crawlerApi}/websites/${id}`, model);
    }
}