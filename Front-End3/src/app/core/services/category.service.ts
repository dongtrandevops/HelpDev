import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { CategoryDTO } from '../models/category.model';
import { WebsiteDTO } from '../models/website.model';
import { BaseHttpService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class categoryService extends BaseHttpService<CategoryDTO> {
}