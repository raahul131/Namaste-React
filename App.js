/*
------------- PARCEL -----------------
HMR - hot module Replacement
File watcher algorithm - file watcher written in c++
- BUNDLING
- MINIFY
- Clean or code
- Dev produnction build
- Super fast build algorithm
- Image Optimzation
- Caching while development
- It also Compress our code
- Compitable with older version of Browser also
- HTTPS on dev machine
- Parcel also manage port number also\
- We should push our parcel.cache in git ignore
- Consistent hashing Algo  
- Parcel is Zero config
*/

import React from "react";
import ReactDOM from "react-dom/client";

// // creating the h1 tag using React
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Namaste Everyone!!!"
// );

// JSX => React.createElement => Object => HTML(DOM)
const Heading2 = () => (
  <h2 id="title" key={"h2"}>
    Namaste React!!!
  </h2>
);

// ----------------  Components  ----------------

const HeaderComponent = () => {
  return (
    <div>
      {<Heading2 />}
      <h1>Namaste React from funtional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
// root.render(heading2);

// to render the functional components
root.render(<HeaderComponent />);
