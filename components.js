

const showBooks = function(books) {
    for(var i=0; i<books.length; i++) {
        console.log(books[i]);
    }
}

const booksAdd = function(obj) 
{
    obj.booksArray.push(obj.add)
    console.log(`The book ${obj.add} has been added successfully`);
}

module.exports = {
    showBooks: showBooks,
    booksAdd: booksAdd
}