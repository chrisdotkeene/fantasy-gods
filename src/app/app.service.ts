import { Food } from './models/food';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const API_URL = 'http://localhost:3000/data';

export interface TableOptions {
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  filter: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  food: Observable<Food[]>;
  tableOptions: Observable<TableOptions>;

  constructor(private http: HttpClient) {
    this.getAllRecipes();
  }

  sortRecipesBy(category: string, sortOrder: string): Observable<Food[]> {
    const params = new HttpParams()
      .set('_sort', category)
      .set('_order', sortOrder);
    return this.http.get<Food[]>(API_URL, { params });
  }

  getAllRecipes() {
    return this.http.get<Food[]>(API_URL);
  }

  getRecipesFromIngredients(ingredient: string): Observable<Food[]> {
    const params = new HttpParams()
      .set('requirements_like', ingredient);
    return this.http.get<Food[]>(API_URL, { params });
  }

}
