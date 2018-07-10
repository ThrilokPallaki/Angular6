import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[] | any[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getFeaturedDish(): Observable<Dish | any> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true').pipe(map( (dishes) => dishes[0]));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getDishIds(): Observable<number[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes').pipe(map(dishes => dishes.map(dish => dish.id)));
  }

  // saveComment(dish, comment): void {
  //     const dishfound: Dish = DISHES.filter( (d) => d.id === dish.id)[0];
  //     dishfound.comments.push(comment);
  // }
}
