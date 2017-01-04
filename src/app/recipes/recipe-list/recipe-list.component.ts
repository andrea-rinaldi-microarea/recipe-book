import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe = new Recipe('dummy', 'dummy', 'http://www.gushmag.it/wp-content/uploads/2015/03/pasta1.jpg')
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(recipe : Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
 