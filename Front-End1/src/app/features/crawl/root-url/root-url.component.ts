import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/core/models/category.model';
import { WebsiteDTO } from 'src/app/core/models/website.model';
import { BaseHttpService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'hd-root-url',
  templateUrl: './root-url.component.html',
  styleUrls: ['./root-url.component.scss']
})
export class RootUrlComponent implements OnInit {
  categories: CategoryDTO[];
  websites: WebsiteDTO[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<CategoryDTO[]>(`${environment.crawlerApi}/categories`).subscribe(
      success => {
        this.categories = success;
      }
    );

    this.http.get<WebsiteDTO[]>(`${environment.crawlerApi}/websites`).subscribe(
      success => {
        this.websites = success;
      }
    );
  }
}
