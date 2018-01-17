import React, { Component } from 'react';
import {connect} from 'react-redux';
import {connectToGcp} from '../actions'

class App extends Component {

  // This success
  componentDidMount() {
    console.log('component is mounted')
    this.props.connectToGcp();
  }

  render() {
    console.log(this.props)
    return (
      <div>React simple starter</div>
    );
  }
}


function mapStateToProps(state) {
  return {connect: state};
}

export default connect(mapStateToProps, {connectToGcp})(App);
