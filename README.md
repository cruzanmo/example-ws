# Simple WebSockets Example

# Usage
* Clone repo.
* Terminal: `npm install`
* Terminal: `node server.js`
* [Open web page](http://127.0.0.1:8080/)

# WebSockets Standards
* http://www.w3.org/TR/websockets/#the-websocket-interface
* http://tools.ietf.org/html/rfc6455
* https://developer.mozilla.org/en-US/docs/WebSockets

# Definitions

```
/**
 * WebSockets constructor.
 * @param {string}        url       The URL to which to connect.
 * @param {string|array}  protocols Optional. String or array of strings. Each string is a subprotocol name.
 *                                  during the handshake with the server, the server header Sec-WebSocket-Protocol must contain one of the subprotocol names.
 *                                  refs:
 *                                     http://www.w3.org/TR/websockets/#the-websocket-interface
 *                                     http://tools.ietf.org/html/rfc6455#section-1.2
 *                                     http://tools.ietf.org/html/rfc6455#section-1.3
 *                                     http://tools.ietf.org/html/rfc6455#section-11.3.4
 *                                  Origin  can also be sent in the headers, so that the websocket only accepts certain origins.
 * @constructor
 */
//function WebSocket(url, protocols)

// Properties
ws.readyState;      // {int} Status of the connection: 0 = connecting, 1 = open, 2 = closing, 3 = closed.
ws.bufferedAmount;  // {int} Number of bytes queued by using send() that have not been transmitted over the network yet.
ws.extensions;      // {string} Extensions selected by the server; currently this is always an empty string.
ws.protocol;        // {string} Empty string until connected. Can by the subprotocol name chosen by the server.
ws.binaryType;      // {string} Initially 'blob'. Can be either 'blob' or 'arraybuffer'

// Methods
ws.send(data);  // data can be string, Blob, or ArrayBuffer
ws.close(shortCode, reason); // shortCode defaults to 1000, reason is a string explaining why the connection is closing

// Event Handlers
ws.onmessage; // message event handler type
ws.onopen;    // open event
ws.onerror;   // error event
ws.onclose;   // close event
```
