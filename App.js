// creating the h1 tag using React
const heading = React.createElement("h1", {}, "Namaste Everyone!");

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(heading);
