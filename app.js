import React from "react"
import ReactDOM from "react-dom/client"


//this is just a simple js object
const heading = React.createElement(
    'h1',
    //Inside this object we can add attributes to the tag.
    {
        id: 'heading',
        xyz: 'abc'
    },
    'Hello World from React');
//creating root for react lib

const parent = React.createElement(
    'div',
    {
        id: "parent"
    },
    //children
    React.createElement(
        'div',
        {
            id: "child"
        },
        //using an array to pass multiple children
        [
            React.createElement('h1', {}, 'h1 tag'),
            React.createElement('h2', {}, 'h2 tag')
        ]
    )
)
//*When passing the elements inside the array keys should be passed  to each child element

//!To solve this problem of nesting we have something called JSX

const root = ReactDOM.createRoot(document.getElementById('root'));

//This render method is responsible for converting the react object into html
//!if root already has children it will be replaced
root.render(parent);    

/**
 *!Responsibilities of Parcel or any other bundler
**Dev Build
**Local Server
**Hot Module Replacement
**File Watching Algorithm written in C++
**Bundling
**Code splitting
**Caching for faster builds
**Image optimization
**Minification
**Compressing
**Consistent Hashing
**Differential Bundling to support older browsers
**Diagnostics
**Error Handling
**HTTPS
**Diagnostics
**Tree Shaking - remove unused code 
 */