import { Ingradient } from '../shared/ingradient.model';


export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingradient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingradient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
