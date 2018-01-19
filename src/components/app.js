import React, { Component } from 'react';
import {connect} from 'react-redux';
import {connectToGcp, listDevices, turnOnDevice, getCurrentDeviceState} from '../actions'
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  // I think I need to keep component level state so that I can track whether
  // the component is toggled or not

  constructor(props) {
    super(props);
    this.state = {Toggled: false};
  }

  // This success
  componentDidMount() {
    console.log('Component mounted')
    // this.props.connectToGcp();
    this.props.connectToGcp();
    this.props.getCurrentDeviceState();
    // console.log(this.props.deviceState);
  }

  listMyDevices() {
    console.log('listDevices')
    const myDevices = this.props.listDevices();
    console.log('hello from listMyDevices')
    console.log(myDevices);
  }

  turnOnSensor(event, isInputChecked) {
    // this.state.Toggled = !this.state.Toggled;
    // const config = {
    //   "on": this.state.Toggled,
    //   "deviceId": "esp32_830B20"
    // }
    // Maybe just call this toggleDevice and have it turn on and off the device
    // turnOnDevice(config);
    console.log(isInputChecked);
    console.log('hello from sensor');
    this.props.deviceState.on = !this.props.deviceState.on
    console.log(this.props.deviceState.on);
    // NOTE: This is the wrong way to update state
    // let device = 'esp32_830B20'
  }

  toggleSensor() {
    // this.props.deviceState.on = !this.props.deviceState.on
    // return console.log(this.props.deviceState.on);
  }

  render() {
    console.log('====>', this.props.deviceState.on)
    return (
      <div>
        React simple starter
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.listMyDevices.bind(this)}
        > Get Devices </button>
        <MuiThemeProvider>
          <Toggle
            onToggle= { this.turnOnSensor.bind(this) }
            // defaultToggled = { this.defaultToggleValue.bind(this) }
            defaultToggled = { true }
            // NOTE: This is the wrong way to update state
            // toggled = { this.props.deviceState.on }
            // toggled = { this.toggleSensor.bind(this) }
          />
        </MuiThemeProvider>
        <div>
          Toggle button is {this.props.deviceState.on}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('state ====>', state)
  return {
    connect: state.connected,
    deviceState: state.currentDeviceState
  };
}

export default connect(mapStateToProps, {connectToGcp, listDevices, turnOnDevice, getCurrentDeviceState})(App);
