import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(DISHES), 2000);
  //   });
  // }
  getDishes(): Promise<Dish[]> {
    return of(DISHES).pipe(delay(2000)).toPromise();
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }

  getDish(id: number): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => dish.id === id)[0]), 2000);
    });
  }
}
