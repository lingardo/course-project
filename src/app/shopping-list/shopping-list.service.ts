import { Subject } from 'rxjs';

import { Ingradient } from '../shared/ingradient.model';


export class ShoppingListService {
    ingradientChanged = new Subject<Ingradient[]>();
  private ingradients: Ingradient[] = [
    new Ingradient('Apples', 5),
    new Ingradient('Tomatoes', 10),
  ];

  getIngradients() {
    return this.ingradients.slice();
  }

  addIngradient(ingradient: Ingradient) {
      this.ingradients.push(ingradient);
      this.ingradientChanged.next(this.ingradients.slice());
  }

  addIngradients(ingradients: Ingradient[]) {
    this.ingradients.push(...ingradients);
    this.ingradientChanged.next(this.ingradients.slice());
  }
}
