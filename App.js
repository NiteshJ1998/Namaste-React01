import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child-1" }, [
    React.createElement("h1", { key: "child1-h1" }, "This is Namaste React 🚀"),
    React.createElement("h2", { key: "child1-h2" }, "I am h2 tag"),
  ]),

  React.createElement("div", { id: "child2", key: "child-2" }, [
    React.createElement("h1", { key: "child2-h1" }, "I am h1 tag"),
    React.createElement("h2", { key: "child2-h2" }, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
