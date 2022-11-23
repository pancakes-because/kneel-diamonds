import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

/* start of event change listner */ 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            // window.alert(`User chose style ${event.target.value}`)
            setStyle(parseInt(event.target.value))
        }
    }
)
/* end of event change listener */ 

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<li>
        <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

// DEBUGGING NOTES 

/* original error: line 1, (dev tools) Uncaught SyntaxError: The requested module does not provide an export named 'getSizes' at JewelryStyles.js:1. */ 
// the "getStyles" import statement on line 1 of JewelryStyles.js is not being read. 
// there is no export function called "getStyles" in database.js.
// added an export function called "getStyles" under line 45 in database.js.

// ALGORITHMIC THINKING 

/* Use the .map() array method in the JewelryStyles component function to generate one long string of HTML that contains the <li> elements for the options. */ 
// see lines 17-28 in DiamondSizes.js for an example. 
// had to also change "listItems" to "listItemsArray" on line 22, so it matches the variable on line 15

/* Using the code examples from the previous chapter that shows how to store the chosen metal as state in the database, update the code in the DiamondSizes and JewelryStyles components to do the same. */ 
// see lines 1 & 10-11 of Metals.js for reference 