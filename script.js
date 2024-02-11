// Managing a Bookstore Inventory
// You are tasked with creating a JavaScript
// program for a bookstore's inventory management
// system. The inventory is represented as an array
//  of book objects, where each book has properties
//  like title, author, genre, and quantity.
// 1. Initialization:
// - Create an initial array to represent the bookstore's
// inventory with at least 5 books.
// 2. Task 1: Out of Stock Books
// - Write a function that takes the 
// inventory array as a parameter and
//  returns an array containing only the 
//  books that are out of stock (quantity is 0).
// 3. Task 2: Update Quantity
// in the inventory.
// - Implement a function that
//  takes the inventory array,
//   a book title, and a new quantity
//    as parameters. The function should \
//    update the quantity of the specified book
// 4. Task 3: Filter by Genre
// - Create a function that filters the inventory array based on a given genre. It should return an array containing only the books of the specified genre.
// 5. Task 4: Total Quantity
// - Write a function that calculates and returns the total quantity of all books in the inventory.
// 6. Task 5: Sorting by Author
// - Implement a function that sorts
//  the inventory array alphabetically
//   by the author's name.
// 7. Task 6: Add New Book
// - Create a function that takes the inventory
//  array and a new book object as parameters.
//   It should add the new book to the inventory.
// 8. Task 7: Unique Genres
// // - Write a function that returns
//  an array containing unique genres present in the

let booksInventory = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Psychological Thriller",
      quantity: 0
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Coming-of-Age Fiction",
      quantity: 18
    },
    {
      title: "Educated",
      author: "Tara Westover",
      genre: "Memoir",
      quantity: 30
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Autobiography",
      quantity: 0
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      genre: "Fiction",
      quantity: 15
    },
    {
      title: "The Testaments",
      author: "Margaret Atwood",
      genre: "Dystopian Fiction",
      quantity: 22
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      genre: "Fantasy",
      quantity: 0
    },
    {
      title: "The Nickel Boys",
      author: "Colson Whitehead",
      genre: "Historical Fiction",
      quantity: 10
    },
    {
      title: "The Giver of Stars",
      author: "Jojo Moyes",
      genre: "Historical Fiction",
      quantity: 17
    },
    {
      title: "The Water Dancer",
      author: "Ta-Nehisi Coates",
      genre: "Historical Fiction",
      quantity: 0
    }
]

//Task1 : Out of stock books
function outOfStockBooks(booksInventory){
    return booksInventory.filter(book => book.quantity === 0)
}

console.log(outOfStockBooks(booksInventory))

//findIndex
//Task2 : update book quantity


// let bookIndex = booksInventory.findIndex(book => book.title === "Normal People")

// console.log(bookIndex)

function updateBookQuantity(inventory,title,newQuantity){
    const bookIndex = inventory.findIndex(book => book.title === title)
    if(bookIndex !== -1){
        inventory[bookIndex].quantity = newQuantity
    }else{
        console.log("Book not found")
    }
}
updateBookQuantity(booksInventory,"Becoming",34)
console.log(booksInventory)

function filterByGenre(inventory,genre){
    return inventory.filter(book => book.genre === genre)
}

console.log(filterByGenre(booksInventory,"Memoir"))


//map filter and reduce

function getTotalQuantity(inventory){
    return inventory.reduce((total,book)=> total + book.quantity,0);
}

console.log(getTotalQuantity(booksInventory))
const shoppingCart = [
    {
      itemId: "123",
      name: "Wireless Mouse",
      price: 29.99,
      quantity: 2
    },
    {
      itemId: "456",
      name: "Keyboard Mechanical",
      price: 59.99,
      quantity: 1
    },
    {
      itemId: "789",
      name: "USB-C Charging Cable",
      price: 19.99,
      quantity: 3
    },
    {
      itemId: "101",
      name: "Webcam HD",
      price: 89.99,
      quantity: 1
    },
    {
      itemId: "112",
      name: "External Hard Drive 1TB",
      price: 99.99,
      quantity: 1
    }
  ];
  


const checkoutTotal = shoppingCart.reduce((totalPrice,item)=>{
    return totalPrice + (item.price * item.quantity)
},0)

console.log(checkoutTotal)

//Sorting By author's name
const numbers = [12, 11, 13, 5, 6, 7, 8, 9, 10];

numbers.sort();

numbers.sort((a,b)=> a-b)

const authors = ['Ryan','Kevin','Josh','Jason','Ashley','Jessica','Kimberly','Kristen','Kyle']

// authors.sort((a,b)=>)

console.log("a".localeCompare("g"))

//If it returns less than 0 then sort 'a' before 'b'
//If it returns greater than 0 then sort 'b' before 'a'
//If it returns 0 then unchanged with respect to each other


console.log(numbers)

function sortBooksByAuthor(inventory){
    return inventory.sort((a,b)=> a.author.localeCompare(b.author))
}

function addNewBook(inventory,newBook){
    inventory.push(newBook)
}

//Use map to creat an array of all the genres
//use set to get uniques genres
//convert set to array


function getUniqueGenres(inventory){
    const genres = inventory.map(book=>book.genre)
    const uniqueGenres = new Set(genres)
    return [...uniqueGenres]

    // return [...new Set(inventory.map(book=>book.genre))]
}

//For Loops in js
// Standard For Loop

const obj = { a: 1, b: 2, c: 3 };
//For In Loop
for(let key in obj){
    console.log(key, obj[key])
}
const array = [10, 20, 30];
for(let i in array){
    console.log(i, array[i])
}

//For of Loop
//Array
//String
//Set
//Map
let myName = "Arjit Verma"
for(let value of myName){
    console.log(value)
}

//For Each
let newArr = [1,2,3,4,5];
newArr.forEach((value,index)=>{
    console.log(index,value)
})

// Use the standard for loop for traditional loop scenarios
//  with a counter or when you need to manipulate the
//   loop variable within the loop.

// Use for...in to iterate 
// over object properties.

// Use for...of for iterating over 
// iterable objects when you need 
// access to the item values directly.
// Use forEach for arrays when
//  you don't need to break or continue
//   the loop based on a condition.


//Chaining Propeties in Arrays
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Filter out all the even numbers then double them and then 
//sum of all numbers

const filtered = myNumber.filter(number => number % 2 === 0);
console.log(filtered)

const doubled = filtered.map(number => number * 2);
console.log(doubled)

const sum = doubled.reduce((total,number)=> total + number,0)

const mySum = numbers.filter(num => num % 2 === 0).map(num => num * 2).reduce((acc, num) => acc + num, 0);


//Flat and flatmaps
const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];;
//Flatten to one level
console.log(nestedArray.flat())

console.log(nestedArray.flat(2))
console.log(nestedArray.flat(Infinity))


const people = [
    { name: "Alice", hobbies: ["Painting", "Reading", "Cycling"] },
    { name: "Bob", hobbies: ["Chess", "Cycling"] },
    { name: "Charlie", hobbies: ["Reading", "Hiking"] }
  ];

//   Extract all hobbies into a single array.
// Remove duplicates from the array of hobbies.

// const hobbies = people.map(person=>person.hobbies)
// const hobbiesFlat = hobbies.flat(Infinity)
// console.log(hobbiesFlat)

const allHobbies = people.flatMap(person => person.hobbies)
console.log(allHobbies)

//more ways to create and fill arrays

const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

const x = new Array(7);
console.log(x)

arr1.fill(0)
console.log(arr1)


console.log(x)


const arr4 = [1, 2, 3,4,5];
// arr4.fill("a",1,3)

arr4.fill("b", -4, -1);

console.log(arr4)

//Array.from
const y = Array.from({length:7},()=>1);
console.log(y)

const z = Array.from({length:7},(_,i)=>{console.log(_); return i+1})
console.log(z)

const str = "Hello World"
const arr5 = Array.from(str)
console.log(arr5)


const divs = document.querySelectorAll("div");
console.log(divs)

const divAray = Array.from(divs,div  => div.textContent)
console.log(divAray)


const obj3 = { a: 1, b: 2, c: 3 };
const arr6 = Array.from(Object.keys(obj3))
console.log(arr6)