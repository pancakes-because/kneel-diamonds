import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

/* Implement the correct code to check if the order button was clicked. */ 
/* Invoke the addCustomOrder function when it is clicked. */ 

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

/* If you hadn't noticed yet, the main.js module looks a bit different than it has in previous projects. It doesn't define the main HTML structure of your application. It is deferring that responsibility to the KneelDiamonds component. */ 

/* Your first step is to import and render the Metals component in the HTML structure defined in the KneelDiamonds component. */ 

// have to import the "Metals" function from the Metals.js module first 
// added import statement line 1, { Metals } from "./Metals.js"
// then invoked the function under the "Metals" heading tag on line 19

/* Once you show metals, also render the components that show the options for diamond sizes and jewelry styles. */ 

// the import statements for the "DiamondSizes" and "JewelryStyles" functions are already set up
// invoke the "DiamondSizes" function under the "Sizes" heading tag on line 23
// invoke the "JewelryStyles" function under the "Styles" heading tag on line 27

/* Now make some choices and place a custom order. You should see a new order show up in the browser. */

// this will be possible after completing the event listener for when the order button is clicked 
// also need to invoke the "Orders" function under the "Custom Jewelry Orders" heading 
// otherwise the "Orders" import statement at the top won't be read and it won't work 