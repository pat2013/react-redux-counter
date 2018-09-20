import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: 0
  //   };
  // }

  // inc = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // dec = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.add}>increse</button>
        <button onClick={this.props.sub}>decrase</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({type:"ADD"}),
    sub: () => dispatch({type:"SUB"})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
