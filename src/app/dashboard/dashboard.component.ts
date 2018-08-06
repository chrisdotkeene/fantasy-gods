import { Food } from './../models/food';
import { AppService } from './../app.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  baconIpsum: Observable<string>;
  recipes: Observable<Food[]>;
  ing1: string;
  ing2: string;

  constructor(private appService: AppService) {
    this.baconIpsum = appService.getbaconIpsum()
      .pipe(
        tap(log => console.log('dashboard component', log))
      );

    this.recipes = appService.getAllRecipes()
      .pipe(
        tap(recipes => console.log('recipes: ', recipes))
      );
  }

  getRecipesFromIngredients() {
    this.recipes = this.appService.getRecipesFromIngredients(this.ing1, this.ing2, undefined)
      .pipe(
        tap(recipes => console.log('recipes: ', recipes))
      );
  }
}
