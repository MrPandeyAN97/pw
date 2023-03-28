const books = [
    { title: "The Hunger Games", author: "suzanne collins", year: 2008 },
    { title: "To Kill a Mockingbird", author: "harper lee", year: 1960 },
    { title: "The Catcher in the Rye", author: "j.d. salinger", year: 1951 },
    { title: "Harry Potter and the Philosopher's Stone", author: "j.k. rowling", year: 1997 },
    { title: "The Great Gatsby", author: "f. scott fitzgerald", year: 1925 },
    { title: "1984", author: "george orwell", year: 1949 },
  ];
  const filterBooks=books.filter((book) => book.year >= 2000);
  const capAuthBooks=filterBooks.map((book) =>({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year,
  }));

  console.log(capAuthBooks);