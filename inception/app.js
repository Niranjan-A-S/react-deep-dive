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
root.render(parent);