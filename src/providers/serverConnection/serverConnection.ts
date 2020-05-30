import ReconnectingWebSocket from 'reconnecting-websocket';

const SERVER_ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT!;

const socket = new ReconnectingWebSocket(SERVER_ENDPOINT);

export default socket;
