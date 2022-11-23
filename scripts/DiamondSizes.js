import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

/* start of event change listener */ 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            // window.alert(`User chose size ${event.target.value}`)
            setSize(parseInt(event.target.value))
        }
    }
)
/* end of event change listener */ 

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    /* The .map() method also iterates the array, just like for..of does in Metals.js. Unlike a for..of loop, it invokes the function that you define. */ 
    /* The (size) function is the first, and only, argument that the .map() method will accept. As it iterates the array, it will take the object at the current location and pass it as an argument to your function. Your function defines the size parameter. */ 
    /* So an object comes into your function, and a string gets returned. That string goes into a new array. */ 
    /* context: https://github.com/nashville-software-school/client-side-mastery/blob/cohort-60/book-5-kneel-diamonds/chapters/KD_RADIO_BUTTONS.md */ 
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// DEBUGGING NOTES 

/* original error: line 1, (dev tools) Uncaught SyntaxError: The requested module does not provide an export named 'getSizes' at DiamondSizes.js:1. */ 
// the "getSizes" import statement on line 1 of DiamondSizes.js is not being read. 
// there is no export function called "getSizes" in database.js
// added an export function called "getSizes" under line 41 in database.js. 

/* Using the code examples from the previous chapter that shows how to store the chosen metal as state in the database, update the code in the DiamondSizes and JewelryStyles components to do the same. */ 
// see lines 1 & 10-11 of Metals.js for reference 