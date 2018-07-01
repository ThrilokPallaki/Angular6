import { Injectable } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthor(): Author[]{
    return AUTHORS;
  }
}
