import axios from 'axios';

export const CONNECT_TO_GCP = 'connect_to_gcp'
export const LIST_DEVICES = 'list_devices'
export const TURN_ON_DEVICE = 'turn_on_device'
export const GET_CURRENT_DEVICE_STATE = 'get_current_device_state'

export function connectToGcp() {
  const request = axios.get('http://localhost:4200/connect')
  console.log('Getting client')
  return {
    type: CONNECT_TO_GCP,
    payload: request
  };
}

export function listDevices() {
  const request = axios.get('http://localhost:4200/list-devices')

  return {
    type: LIST_DEVICES,
    payload: request
  };
}

export function turnOnDevice(config) {
  const request = axios.post(`http://localhost:4200/device-config`, config)
    // .then(() => callback())

  return {
    type: TURN_ON_DEVICE,
    payload: request
  }
}

export function getCurrentDeviceState() {
  const request = axios.get('http://localhost:4200/device-state')

  return {
    type: GET_CURRENT_DEVICE_STATE,
    payload: request
  }
}
