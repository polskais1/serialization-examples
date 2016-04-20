$(function(){
  'use strict'

  $('.run .message-pack').click(jsonCallback);

  function parseData(data) {
    return msgpack.decode(data);
  }

  function jsonCallback(event) {
    let payload = msgpack.encode({'foo': 'bar'});
    // let payload = msgpack.encode([1, 2, 3]);
    // callServer(payload, "message-pack", parseData);
    // debugger
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/message-pack');
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.responseType = 'arrayBuffer';
    // xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.onload = function() {
      debugger
      console.log(xhr.response);
      // console.log(msgpack.decode(new Uint8Array(xhr.response)));
    }
    xhr.send(payload);
  }
});
