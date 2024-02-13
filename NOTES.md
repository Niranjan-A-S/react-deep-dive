# Notes

## Parcel
- Dev Build
- Local Server
- Hot Module Replacement
- File Watching Algorithm written in C++
- Bundling
- Code splitting
- Caching for faster builds
- Image optimization
- Minification
- Compressing
- Consistent Hashing
- Differential Bundling to support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - remove unused code 
- Differentiate build for production and development

##Reconciliation Algorithm (React Fiber)
- React creates a virtual DOM which is a representation of the real DOM which is nothing but the react elements (normal nested JS object).
- React uses the diffing algorithm to  find the difference between the current virtual DOM and updated virtual DOM and updates the DOM based on the differences.
- This happens in every render cycle.
- In React 16 this new way of finding the difference or this whole algorithm is termed as React Fiber.

##  Microservices Architecture
- All the services are put together or the code is tightly coupled in a monolithic architecture.
- In Microservices each feature is the responsibility of each service. It follows the single responsibility principle or Separation of concerns.
- And all these services interact with each other through configurations.