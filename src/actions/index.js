import axios from 'axios';

export const CONNECT_TO_GCP = 'connect_to_gcp'

export function connectToGcp() {
  const request = axios.get('http://localhost:4200/connect')

  return {
    type: CONNECT_TO_GCP,
    payload: request
  };
}
