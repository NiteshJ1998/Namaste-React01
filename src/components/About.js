import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2>This is about page</h2>
      <User name={"Nitesh function "} />
      <UserClass name={"Vicky Class based function"} location={"Pune"} />
    </div>
  );
};

export default About;
