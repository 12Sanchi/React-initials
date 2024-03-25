import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>

        <UserClass name={"First"} location={"Dehradun class"} />
      </div>
    );
  }
}

export default About;
//        <UserClass name={"Second"} location={"US"} />
