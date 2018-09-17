import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchRecipe = "";
  recipeList: any;

  constructor(public recipeService: RecipeService) {};

  ngOnInit() {}

  getRecipe(recipe) {
    this.recipeService.recipeApi(recipe).subscribe(res => {
      this.recipeList = Object.values(res)[3]; 
      console.log(this.recipeList);
  });}
}
