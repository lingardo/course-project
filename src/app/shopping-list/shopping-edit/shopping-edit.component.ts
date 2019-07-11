import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngradient = new Ingradient(ingName, ingAmount);
    this.slService.addIngradient(newIngradient);
}
}
