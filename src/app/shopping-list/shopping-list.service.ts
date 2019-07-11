import { Ingradient } from '../shared/ingradient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingradientChanged = new EventEmitter<Ingradient[]>();
  private ingradients: Ingradient[] = [
    new Ingradient('Apples', 5),
    new Ingradient('Tomatoes', 10),
  ];

  getIngradients() {
    return this.ingradients.slice();
  }

  addIngradient(ingradient: Ingradient){
      this.ingradients.push(ingradient);
      this.ingradientChanged.emit(this.ingradients.slice());
  }

  addIngradients(ingradients: Ingradient[]) {
    this.ingradients.push(...ingradients);
    this.ingradientChanged.emit(this.ingradients.slice());
  }
}
