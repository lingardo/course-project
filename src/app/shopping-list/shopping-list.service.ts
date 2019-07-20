import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
    ingradientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
  private ingradients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngradients() {
    return this.ingradients.slice();
  }

  getIngredient(index: number){
      return this.ingradients[index];
  }

  addIngradient(ingradient: Ingredient) {
      this.ingradients.push(ingradient);
      this.ingradientChanged.next(this.ingradients.slice());
  }

  addIngradients(ingradients: Ingredient[]) {
    this.ingradients.push(...ingradients);
    this.ingradientChanged.next(this.ingradients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingradients[index] = newIngredient;
    this.ingradientChanged.next(this.ingradients.slice());
  }

  deleteIngredient(index: number) {
    this.ingradients.splice(index, 1);
    this.ingradientChanged.next(this.ingradients.slice());
  }

}
