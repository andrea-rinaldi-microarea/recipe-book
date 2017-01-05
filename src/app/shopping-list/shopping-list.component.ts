import { Ingredient } from './../shared/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] =[];

  constructor() { }

  ngOnInit() {
  }

}
