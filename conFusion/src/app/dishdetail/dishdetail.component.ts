import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  id: number;

  constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.dishService.getDish(this.id).then(dish => this.dish = dish);
  }

  // Likes for each dish.
  like(): void {
    this.dish.likes += 1;
  }

  // Shares for each dish.
  share(): void {
      this.dish.shares += 1;
  }

  // back to the parent view.
  goBack(): void {
    this.location.back();
  }

}
