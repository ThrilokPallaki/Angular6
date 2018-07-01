import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/author';
import { AUTHORS } from '../shared/authors';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  authors: Author[];
  constructor(private authorService:AuthorsService) { }

  ngOnInit() {
    this.authors = this.authorService.getAuthor();
  }

}
