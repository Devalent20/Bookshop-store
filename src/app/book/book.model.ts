export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  cover: string;
  publicationYear: number;
  status: BookStatus;
};

export enum BookStatus {
  READ = 'Read',
  UNREAD = 'Unread',
  READING = 'Reading',
}
