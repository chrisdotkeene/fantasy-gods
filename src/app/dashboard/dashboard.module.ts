import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    RecipesComponent,
    SearchRecipesComponent
  ],
})
export class DashboardModule { }
