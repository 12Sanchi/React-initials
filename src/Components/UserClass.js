import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy.photo.com",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did mount");
    const data = await fetch("https://api.github.com/users/12Sanchi");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    const { login, id, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{login}</h2>
        <h3>Id:{id}</h3>
        <h4>Contact:sanchigupta459@</h4>
      </div>
    );
  }
}
export default UserClass;
