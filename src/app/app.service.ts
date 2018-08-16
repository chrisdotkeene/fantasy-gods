import { Food } from './models/food';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { FoodEffects } from './models/food-effects';

const RECIPE_URL = 'http://localhost:3000/data';
const RECIPE_EFFECT_URL = 'http://localhost:3001/data';

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

  sortRecipesBy(category: string, sortOrder: string): Observable<Food[]> | Observable<FoodEffects[]> {
    const params = new HttpParams()
      .set('_sort', category)
      .set('_order', sortOrder);
    return this.http.get<Food[]>(RECIPE_URL, { params });
  }

  getAllRecipes(): Observable<Food[]> {
    return this.http.get<Food[]>(RECIPE_URL);
  }

  getRecipeDetail(recipeId: string): Observable<Food> {
    return this.http.get<Food>(`${RECIPE_URL}?name=${recipeId}`)
      .pipe(
        map(res => res['0'])
      );
  }

  getRecipesFromIngredients(ingredient: string): Observable<Food[]> {
    const params = new HttpParams()
      .set('ingredients_like', ingredient);
    return this.http.get<Food[]>(RECIPE_URL, { params });
  }

  getRecipesByEffects(effect: string): Observable<FoodEffects[]> {
    const params = new HttpParams()
      .set('q', effect);
    return this.http.get<FoodEffects[]>(RECIPE_EFFECT_URL, { params });
  }

  getAllRecipeEffects(): Observable<FoodEffects[]> {
    return this.http.get<FoodEffects[]>(RECIPE_EFFECT_URL);
  }

}
