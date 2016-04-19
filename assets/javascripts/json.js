$(function(){
  'use strict'

  $('.run .json').click(jsonCallback);

  function jsonCallback(event) {
    let payload = JSON.stringify({shmoo: "shmee"});
    callServer(payload, "json", "json");
  }
});
