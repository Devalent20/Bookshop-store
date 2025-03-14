import { Component, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  @Input() book!: Book;

  constructor(private bookService: BookService) {}
  getCoverBook(coverURL: string) {
    return this.bookService.getCoverBook(coverURL);
  }
}
