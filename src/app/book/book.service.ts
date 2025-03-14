import { Injectable } from '@angular/core';
import { Book, BookStatus } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Fiction',
      cover: 'cover1.jpg',
      publicationYear: 2001,
      status: BookStatus.READ,
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      genre: 'Non-Fiction',
      cover: 'cover1.jpg',
      publicationYear: 2002,
      status: BookStatus.UNREAD,
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      genre: 'Fantasy',
      cover: 'cover1.jpg',
      publicationYear: 2003,
      status: BookStatus.READING,
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Author 4',
      genre: 'Comedy',
      cover: 'cover1.jpg',
      publicationYear: 2004,
      status: BookStatus.READ,
    },
    {
      id: 5,
      title: 'Book 5',
      author: 'Author 5',
      genre: 'Slice of Life',
      cover: 'cover1.jpg',
      publicationYear: 2005,
      status: BookStatus.READING,
    },
    {
      id: 6,
      title: 'Book 6',
      author: 'Author 6',
      genre: 'Drama',
      cover: 'cover1.jpg',
      publicationYear: 2006,
      status: BookStatus.UNREAD,
    },
  ];

  getList(): Book[] {
    return this.books;
  }

  getCoverBook(coverURL: string) {
    return '/assets/books/' + coverURL;
  }
}
