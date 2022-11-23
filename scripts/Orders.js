import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

/* Go to the code where you are generating the HTML representation of the orders that customers place */ 
/* *** The code below finds the price of the user's chosen metal, style, and size. ***  */ 

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {

const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
let totalCost = foundMetal.price 

const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
totalCost += foundStyle.price 

const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
totalCost += foundSize.price 

/* *** Then, you can interpolate the price in the HTML string. *** */ 
// totalCost = foundMetal.price + foundStyle.price + foundSize.price; 

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

/* This is the code that generate the html for the "Orders" section in the browser */ 

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

/* original error: line 1, (dev tools) Uncaught SyntaxError: The requested module does not provide an export named 'getOrders' at Orders.js:1. */ 
// the "getOrders" import statement on line 1 of Orders.js is not being read. 
// there is no export function called "getOrders" in database.js.
// added an export function called "getOrders" under line 49 in database.js.

