import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-effects',
  templateUrl: './recipes-effects.component.html',
  styleUrls: ['./recipes-effects.component.css']
})
export class RecipesEffectsComponent {
  @Input() effects: string | undefined;
  @Output() clicked = new EventEmitter<string>();

  sortByCategory(category: string) {
    this.clicked.emit(category);
  }

}
