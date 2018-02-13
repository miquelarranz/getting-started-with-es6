const ageNotDefined = 'Not defined';

function User (email, name, age) {
  this.email = email;
  this.name = name;
  this.age = age;
  this.books = [];
}

User.prototype.getAge = function () {
  return (this.age) ? `${this.age} year(s)` : ageNotDefined;
};

User.prototype.addBooks = function (books) {
  this.books = this.books.concat(books);
};

User.prototype.getBook = function (position) {
  let { title, author} = this.books[position];

  return `${title} by ${author}`;
};

// These lines will help you to test the example
let user = new User('john.doe@email.com', 'John', 22);
user.addBooks([
    { title: 'Getting Started With ES6', author: 'John Doe' },
    { title: 'Javascript Superhero', author: 'John Doe' }
]);

console.log(user.getAge()); // 22 year(s)
console.log(user.getBook(0)); // Getting Started With ES6 by Jhon Doe
