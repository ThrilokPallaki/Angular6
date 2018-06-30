import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
  @Input()
  dish:Dish;

  like(): void{
      this.dish.likes += 1;
  }

  share(): void{
      this.dish.shares +=1;
  }
  constructor() { }

  ngOnInit() {

  }

}
