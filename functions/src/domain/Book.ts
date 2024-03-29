export class Book {
  readonly id: string;
  public author: string;
  public title: string;
  public yearPublished: string;
  public genre: string;
  public isbn: string;
  public image: string;
  public dateCreated: Date;

  constructor(
    id: string,
    author: string,
    title: string,
    yearPublished: string,
    genre: string,
    isbn: string,
    image: string
  ) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.yearPublished = yearPublished;
    this.genre = genre;
    this.isbn = isbn;
    this.image = image;
    this.dateCreated = new Date();
  }
}
