import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

/* start of change event listener */ 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            // window.alert(`User chose metal ${event.target.value}`)
            setMetal(parseInt(event.target.value))
        }
    }
)
/* end of change event listener */ 

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

// ALGORITHIMIC THINKING 

/* Now, you need to listen for when the user makes a choice in one of the option groups. Start with metals. When you choose a metal, you should now see a message displayng the primary key of the chosen metal. */ 
// in lines 9-11, prints what the user has chosen after they click one of the choices in for "metals"
// "metal" in line 9 is referring to the name of the radio button seen in the html with dev tools

/* Instead of showing an alert when a metal is chosen, you now need to set the corresponding property of the order builder object in application state. 

Make sure you update your import statement to get the setMetal() function. */ 

