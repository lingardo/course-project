import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradients: Ingradient[] = [
    new Ingradient('Apples', 5),
    new Ingradient('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngradientAdded(ingradient: Ingradient){
    this.ingradients.push(ingradient);
  }

}

