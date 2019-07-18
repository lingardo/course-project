import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingradients: Ingradient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingradients = this.slService.getIngradients();
    this.subscription = this.slService.ingradientChanged
    .subscribe(
      (ingradients: Ingradient[]) => {
        this.ingradients = ingradients;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

