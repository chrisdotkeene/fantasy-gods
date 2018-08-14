import { Food } from './../models/food';
import { AppService } from './../app.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  recipes: Observable<Food[]>;
  ingredient: string;
  direction = 'asc';

  constructor(private appService: AppService) {
    this.getAllRecipes();
  }

  getRecipesFromIngredients() {
    this.recipes = this.appService.getRecipesFromIngredients(this.ingredient);
  }

  getAllRecipes() {
    this.recipes = this.appService.getAllRecipes()
      .pipe(
        tap(recipes => console.log('recipes: ', recipes)),
        map(res => res)
      );
  }

  sortBy(category: string) {
    this.recipes = this.appService.sortRecipesBy(category, this.changeDirection());
  }

  changeDirection() {
    return this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }

}
