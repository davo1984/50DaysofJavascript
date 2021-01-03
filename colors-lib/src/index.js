import React from "react"
import { render } from "react-dom"
import Colors from "colors"
var colors = require("colors")

Colors.enable()
console.log("enabled colors")

const ColorsTest = () => {
    return (
        <div>
            {"Happy New Year 2021"}<br />
            {console.log(colors.rainbow("Happy New Year 2021"))}
            {console.log("Happy New Year 2021".rainbow)}
        </div>
    )
    // return <div>{console.log('Hello'.green)}</div>
    // return <div> Happy New Year 20201! </div>
}

render(<ColorsTest />, document.querySelector("#root"))