/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}, 
}

// *** see orderBuilder: {} above *** 
/* When a person is providing input in your application, you need to store that input - keep track of it. In this application, when the user chooses one of the radio buttons, they are changing the state of the application. */ 
/* You need a place to store that state. State is always stored in your database, or data store, for your application. The database object, orderBuilder: {}, keeps track of the style, size, and metal that the user clicks on with their mouse. */ 



export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

/* Now that you have a new state key in your database, you need a way to store user choices. What are the choices the user is making as she uses the application? Metal, Size, and Style */
/* Our new orderBuilder state object will store which one of those options was chosen.*/ 
/* Now, the export functions below have the responsibility of setting state. */ 

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

/* *** In the last two chapters, you implemented code that updated the state of your database by storing options that a person chooses. It's temporary state, in that the user can keep making choices over and over again, and the state of the chosen metal, style, and size will constantly change.

Now it's time to handle making a permanent change to state. You are going to implement the click hander for the purchase button.

It will modify permanent state. When state changes for your application, you need to regenerate the HTML to display the new state to the user. *** */ 

/* When the user clicks on the Create Custom Order button in the application, you need to store their choices permanently. This is where the customOrder state comes into play. You will be adding objects to that state array. */ 

/* When the user clicks on the Create Custom Order button in the application, you need to store their choices permanently. This is where the customOrder state comes into play. You will be adding objects to that state array. */ 

/* Since that's a new task that the application needs to perform, you need a function. The function's sole reponsiblity will be to take the temporary choices currently being stored in the orderBuilder state object and make them permanent. */ 

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // *** Broadcast a notification that permanent state has changed *** 
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// DEBUGGING NOTES 

/* original error: line 1, (dev tools) Uncaught SyntaxError: The requested module does not provide an export named 'getSizes' at DiamondSizes.js:1. */ 
// the "getSizes" import statement on line 1 of DiamondSizes.js is not being read. 
// there is no export function called "getSizes" in database.js
// added an export function called "getSizes" under line 41 in database.js. 

/* original error: line 1, (dev tools) Uncaught SyntaxError: The requested module does not provide an export named 'getSizes' at JewelryStyles.js:1. */ 
// the "getStyles" import statement on line 1 of JewelryStyles.js is not being read. 
// there is no export function called "getStyles" in database.js.
// added an export function called "getStyles" under line 45 in database.js.

/* original error: line 1, (dev tools) Uncaught SyntaxError: The requested module does not provide an export named 'getOrders' at Orders.js:1. */ 
// the "getOrders" import statement on line 1 of Orders.js is not being read. 
// there is no export function called "getOrders" in database.js.
// added an export function called "getOrders" under line 49 in database.js.





