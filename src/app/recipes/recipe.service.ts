import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'This is a description',
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Tomatoes', 3)
            ]
            ),
    // tslint:disable-next-line: max-line-length
        new Recipe(
            'Another test Recipe',
            'This is a another description',
            'https://i.pinimg.com/originals/0c/13/41/0c1341bcdfb1d44f560761c012b946e5.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Potatoes', 4)
            ]
            ),
            new Recipe(
            'Next test Recipe',
            'Another description',
            'https://s24667.pcdn.co/wp-content/uploads/2017/12/Kispiac-Bisztro-Chicken-Budapest-Restaurants.jpg',
            [
                new Ingredient('Meat', 3),
                new Ingredient('Potatoes', 8)
            ]
            )
      ];
    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngradientsToShoppingList(ingradients: Ingredient[]) {
        this.slService.addIngradients(ingradients);
    }

    
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
  }
  
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
