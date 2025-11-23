"use strict";

// Q3: Library Management System (Classes + Objects)
// - Book class with title, author, ISBN, isIssued
// - Methods: issueBook(), returnBook()
// - Create array of book objects, display available, issue by ISBN

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }

  display() {
    return `${this.title} — ${this.author} [ISBN: ${this.ISBN}] ${this.isIssued ? '(Issued)' : '(Available)'}`;
  }
}

// Sample library
const library = [
  new Book('The Hobbit', 'J.R.R. Tolkien', '978-0261103344'),
  new Book('Clean Code', 'Robert C. Martin', '978-0132350884'),
  new Book('You Don\'t Know JS', 'Kyle Simpson', '978-1491904244'),
  new Book('Eloquent JavaScript', 'Marijn Haverbeke', '978-1593279509'),
];

function listAvailableBooks() {
  console.log('\n=== Available Books ===');
  library.filter((b) => !b.isIssued).forEach((b) => console.log(b.display()));
}

function findByISBN(isbn) {
  return library.find((b) => b.ISBN === isbn || b.ISBN.replace(/-/g, '') === isbn.replace(/-/g, ''));
}

function issueBookByISBN(isbn) {
  const book = findByISBN(isbn);
  if (!book) {
    console.log(`Book with ISBN ${isbn} not found.`);
    return;
  }
  if (book.issueBook()) console.log(`Issued: ${book.display()}`);
  else console.log(`Cannot issue: already issued -> ${book.display()}`);
}

function returnBookByISBN(isbn) {
  const book = findByISBN(isbn);
  if (!book) {
    console.log(`Book with ISBN ${isbn} not found.`);
    return;
  }
  if (book.returnBook()) console.log(`Returned: ${book.display()}`);
  else console.log(`Cannot return: not currently issued -> ${book.display()}`);
}

// Demo run
listAvailableBooks();
console.log('\nIssuing ISBN 978-0132350884');
issueBookByISBN('978-0132350884');
console.log('\nAfter issuing:');
listAvailableBooks();

console.log('\nTrying to issue same book again:');
issueBookByISBN('978-0132350884');

console.log('\nReturning book:');
returnBookByISBN('978-0132350884');

console.log('\nFinal available:');
listAvailableBooks();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Book, library, issueBookByISBN, returnBookByISBN };
}
