import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A test Recipe',
            'This is a description',
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
            [
                new Ingradient('Meat', 1),
                new Ingradient('Tomatoes', 3)
            ]
            ),
    // tslint:disable-next-line: max-line-length
        new Recipe(
            'Another test Recipe',
            'This is a another description',
            'https://i.pinimg.com/originals/0c/13/41/0c1341bcdfb1d44f560761c012b946e5.jpg',
            [
                new Ingradient('Meat', 1),
                new Ingradient('Potatoes', 4)
            ]
            ),
            new Recipe(
            'Next test Recipe',
            'Another description',
            'https://s24667.pcdn.co/wp-content/uploads/2017/12/Kispiac-Bisztro-Chicken-Budapest-Restaurants.jpg',
            [
                new Ingradient('Meat', 3),
                new Ingradient('Potatoes', 8)
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

    addIngradientsToShoppingList(ingradients: Ingradient[]) {
        this.slService.addIngradients(ingradients);
    }
}
