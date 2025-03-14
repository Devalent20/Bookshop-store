import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  constructor(private bookService: BookService) {}

  get Books() {
    return this.bookService.getList();
  }

  getCoverBook(coverURL: string) {
    return this.bookService.getCoverBook(coverURL);
  }
}
