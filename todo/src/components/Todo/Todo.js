import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  // state = {
  //   number: 0
  // }

  // UNSAFE_componentWillMount(){
  //   console.log('hi');
  // }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillReceiveProps() {
    console.log("receive props");
  }
  shouldComponentUpdate() {
    console.log("should component Update");
    return true;
  }

  componentWillMount() {
    // console.log(this.state.number);
    console.log("willMount");
    // this.setState({number:5})
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    
  }
  

  getSnapshotBeforeUpdate(){
    console.log('snapshot');
  }

  componentDidUpdate(){
    console.log('did update');
  }
  editItem = () => {
    this.props.editStatusTask(this.props.id);
  };

  removeItem = () => {
    this.props.removeFromList(this.props.id);
  };

  render() {
    console.log("render my component");
    const { title, author, priority, status } = this.props;
    return (
      <div className="Todo">
        <div onClick={this.editItem}>
          <p className={`Todo__name ${status && "done"}`}>{title}</p>
          <p className={`Todo__priority ${status && "done"}`}> {priority}</p>
          <p className={`Todo__author ${status && "done"}  `}>{author}</p>
          {/* <p>{this.state.number}</p> */}
        </div>
        <span onClick={this.removeItem} className="Todo__remove">
          X
        </span>
      </div>
    );
  }
}

export default Todo;

// ${status && "done"}
