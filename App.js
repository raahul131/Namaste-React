import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTML(DOM)
const Title = () => (
  <h2 id="title" key={"h2"}>
    Food Villa
  </h2>
);

const HeaderComponent = () => {
  return (
    <div>
      {<Title />}
      <h1>Namaste React from funtional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// to render the functional components
root.render(<HeaderComponent />);
