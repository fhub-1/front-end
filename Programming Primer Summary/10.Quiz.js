function addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBook( ) {
    console.log(`Favorite Book ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks) {
        console.log(bookName)
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// console.log(favoriteBooks);
printFavoriteBook();