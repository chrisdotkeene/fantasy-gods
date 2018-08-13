import { TableOptions } from './../../app.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  @Input() recipes: string | undefined;
  @Input() options: TableOptions;
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  sortByCategory(category: string) {
    this.clicked.emit(category);
  }

}
