import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement('h1',{id:"heading"}, "Hello World from React")

//Nested Heading
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 of child1"),
        React.createElement("h2",{},"I am h2 of child1")
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 of child1"),
        React.createElement("h2",{},"I am h2 of child1")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)