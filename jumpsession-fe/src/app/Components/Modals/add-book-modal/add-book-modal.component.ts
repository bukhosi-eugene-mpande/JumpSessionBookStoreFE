import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BookService } from 'src/app/Services/books';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent {

  @Output() close = new EventEmitter<void>();
  @Output() addedBook = new EventEmitter<Book>();

  newBook: Book = {
      id: 0,
      book_name: '',
      isbn_number: '',
      author: ''
  };

  constructor(private bookService: BookService) {}

  saveBook() {
      this.bookService.addBook(this.newBook).subscribe({
        next: (addedBook: Book) => {
          console.log('Book added successfully:', addedBook);
          this.addedBook.emit(addedBook); // Emit the userCreated event
          this.closeModal();
        },
        error: (err) => {
          console.error('Error adding book:', err);
        }
      });
   }

  closeModal() {
    this.close!.emit();
  }
}
