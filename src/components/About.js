import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1> About Us</h1>
      <p>This is the Namaste React Live Course🚀</p>
      <Profile />
      <ProfileClass />
    </div>
  );
};

export default About;
