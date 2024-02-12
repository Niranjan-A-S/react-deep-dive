// import React from "react"
// import ReactDOM from "react-dom/client"

// this is just a simple js object
// const heading = React.createElement(
//     'h1',
//  Inside this object we can add attributes to the tag.
//     {
//         id: 'heading',
//         xyz: 'abc'
//     },
//     'Hello World from React');
//creating root for react lib

// const parent = React.createElement(
//     'div',
//     {
//         id: "parent"
//     },
//children
//     React.createElement(
//         'div',
//         {
//             id: "child"
//         },
//using an array to pass multiple children
//         [
//             React.createElement('h1', {}, 'h1 tag'),
//             React.createElement('h2', {}, 'h2 tag')
//         ]
//     )
// )
// //*When passing the elements inside the array keys should be passed  to each child element

// //!To solve this problem of nesting we have something called JSX

// const root = ReactDOM.createRoot(document.getElementById('root'));

// //This render method is responsible for converting the react object into html
// //!if root already has children it will be replaced
// root.render(parent);

// ***************************************************************************************************************************************************

import React from "react";
import ReactDOM from "react-dom/client";

//This createElement method creates a React element which is an Object and when it is loaded to the DOM it becomes an HTML element.
// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');

//JSX is not a part of react but it is a syntactic sugar for React.createElement
//JSX is not HTML in JS but it is a HTML like syntax

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>
//Now jsxHeading is a React element

//!This JSX code is transpiled before reaching the browser and this is done by Parcel which in turns uses BABEL
//!Babel converts this JSX code into something that the react can understand

//!JSX  => React.createElement => ReactElement (JS object) => HTMLElement
// console.log({ heading, jsxHeading });

// ***********************************************************************************************************************************************************

//React Functional Components
//!Function which returns JSX

const Title = () => {
    return <h1 id="heading">Namaste React using Functional Component</h1>;
}
const Heading = ({ prop }) => <div id="container">
    <Title />
    {/* or */}
    {Title()}
    {/* or */}
    {React.createElement(Title)}
    <span>{prop}</span>
</div>

//!Component Composition (Putting Components inside Components)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Heading, { prop: 'This is how you pass the prop' }, 'Hello'));
//or 
root.render(<Heading prop='This is how you pass the prop' />)