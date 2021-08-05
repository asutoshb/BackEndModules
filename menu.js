

const EventEmitter = require('events');

const readline = require('readline');



const eventEmitter = new EventEmitter();

let booksArray = ["The kite runner", "Ikigai", "The Alchemist"];

const read1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const {showBooks, booksAdd} = require('./components');

eventEmitter.on("showBooks", showBooks);
eventEmitter.on("booksAdd", booksAdd);

const menuOption = function()
{
    read1.question("Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit", (choice) => {
        if(choice == 1) {
            eventEmitter.emit("showBooks", booksArray);
            menuOption();
        }
        else if(choice == 2) 
        {
            read1.question("Enter new book", (add)=>{
                eventEmitter.emit("booksAdd", {booksArray: booksArray, add: add});
                menuOption();
            })
            
        }
        else if(choice == 3)
        {
            read1.question("Are you sure you want to quit - press Y to quit", (val)=>{
                if(val == 'Y')
                {
                    read1.close();
                }
                else
                {
                    menuOption();
                }
            })
        }
        else
        {
            console.log("You have selected an invalid entry so please press 1, 2 or 3");
            menuOption();
        }
    })
}

menuOption();

read1.on("close", ()=>{
    console.log("Bye Bye");
})