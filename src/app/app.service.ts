import { Food } from './models/food';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = 'https://baconipsum.com/api/?type=meat-and-filler';
const recipes = './assets/recipes.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getbaconIpsum() {
    return this.http.get<string>(url);
  }

  getAllRecipes() {
    return this.http.get<Food[]>(recipes);
  }

  getRecipesFromIngredients(ing1: string, ing2?: string, ing3?: string, ing4?: string) {
    return this.http.get<Food[]>(recipes)
      .pipe(
        map(list => list.filter(r => {
          console.log('RRR: ', ing1);
          // return r.requirements.includes(ing1) && r.requirements.includes(ing2);
          if (ing1 && ing2 && ing3 && ing4) {
            return r.requirements.includes(ing1) && r.requirements.includes(ing2)
              && r.requirements.includes(ing3) && r.requirements.includes(ing4);
          } else if (ing1 && ing2 && ing3) {
            return r.requirements.includes(ing1) && r.requirements.includes(ing2)
              && r.requirements.includes(ing3);
          } else if (ing1 && ing2) {
            return r.requirements.includes(ing1) && r.requirements.includes(ing2);
          } else {
            r.requirements.includes(ing1);
          }
        }))
      );
  }

}
