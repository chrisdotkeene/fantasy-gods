import { Food } from './../../models/food';
import { AppService } from './../../app.service';
import { tap, pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  id: Observable<Food>;

  constructor(route: ActivatedRoute, appService: AppService) {
    console.log('Creating new instance of EmployeeDetailComponent');
    this.id = route.params.pipe(
      pluck<Params, string>('recipeId'),
      // tap(params => console.log('Got new value for params', params)),
      switchMap(id => appService.getRecipeDetail(id)),
      tap(params => console.log('Got new value for params2', params))
    );
  }
}
