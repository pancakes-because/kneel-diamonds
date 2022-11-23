import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

// the following listens for when the state changes 
// will regenerate the html in the browser to reflect those changes 
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

/* If you hadn't noticed yet, the main.js module looks a bit different than it has in previous projects. It doesn't define the main HTML structure of your application. It is deferring that responsibility to the KneelDiamonds component. */ 

/* There is a function named renderAllHTML() that is defined in the main.js module, then immediately invoked. This function is needed later in the growth of the application, because for Kneel Diamonds, you are going to react to the user choosing options. */

/* When the user chooses options, the state of your data is going to change. When the state of your data changes, then all of the HTML must be regenerated to display that new state. More on that later. Just setting the stage now. */ 

/* *** Luckily, reacting to a custom event is just like reacting to a browser generated event like click and change. You use an event listener.

When state changes for your application, you need to regenerate the HTML to display the new state to the user.

Which module currently is responsible for starting the process of generating HTML? That's right, it's main.js.

That means that the main module should listen for the stateChanged event. When it is dispatched by the database module, the main module will generate all the HTML again and display it. *** */ 