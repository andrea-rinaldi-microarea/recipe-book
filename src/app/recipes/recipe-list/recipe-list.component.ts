import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', []),
    new Recipe('Spaghetti', 'A classic', 'http://www.gushmag.it/wp-content/uploads/2015/03/pasta1.jpg', []),
    new Recipe('Sauerkraut', 'Really manly recipe', 'http://lh6.ggpht.com/_2yL50eRSq1o/SxJyjZfKGKI/AAAAAAAAGH0/JnHz-q9mY0Q/s800/Crauti.JPG', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(recipe : Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
 