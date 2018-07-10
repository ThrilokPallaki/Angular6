import { Component, OnInit, ViewChild , Inject} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @ViewChild('cf') cf;

  dish: Dish;
  id: number;
  dishIds: number[];
  next: number;
  prev: number;
  commentForm: FormGroup;
  formErrors = {
    'author': '',
    'comment': '',
    'rating': '',
    'date': ''
  };
  validationMessages = {
    'author': {
      'required': 'AuthorName is required',
      'pattern': 'Please enter a valid name',
      'minlength': 'AuthorName must be at least 2 characters long',
      'maxLength': 'AuthorName must be less that 25 characters long'
    },
    'comment': {
      'required': 'Comment is required',
      'minlength': 'Comment must be at least 5 characters long',
      'maxlength': 'Comment must be less that 150 characters long'
    },
    'date': {
      'required': 'Date required'
    }
  };

  // tslint:disable-next-line:max-line-length
  constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
   this.route.params.pipe(switchMap( (params: Params) => this.dishService.getDish(+params['id'])))
   .subscribe( (dish) => this.setPrevNext(this.dish = dish));

   this.dishService.getDishIds().subscribe( (dishids) => this.dishIds = dishids);
   this.createCommentForm();
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

  setPrevNext(dish: Dish): any {
    this.id = +dish.id;
    this.prev = (this.dishIds.length - this.id - 1) % this.dishIds.length;
    this.next = (this.dishIds.length + this.id + 1) % this.dishIds.length;
  }

  createCommentForm() {
    this.commentForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      author: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+'), Validators.minLength(2), Validators.maxLength(25)]),
      rating: new FormControl(1),
      // tslint:disable-next-line:max-line-length
      comment: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
      date: new FormControl(new Date(), Validators.required)

    });
    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        const control = form.get(field);
        if (control && control.dirty && control.invalid) {
          // Remove any previous messages
          this.formErrors[field] = '';
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += this.validationMessages[field][key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmitCommentForm() {
    console.log(JSON.stringify(this.commentForm.value));
    // this.dishService.saveComment(this.dish, this.commentForm.value);
    this.cf.resetForm();
  }

}
