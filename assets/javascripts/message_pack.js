$(function(){
  'use strict'

  $('.run .message-pack').click(jsonCallback);

  function jsonCallback(event) {
    let payload = msgpack.encode({shmoo: "shmee"});
    callServer(payload, "message-pack");
  }
});
