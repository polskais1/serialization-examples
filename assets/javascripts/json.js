$(function(){
  'use strict'

  $('.run .json').click(jsonCallback);

  function parseData(data) {
    return JSON.parse(data);
  }

  function jsonCallback(event) {
    let payload = JSON.stringify({"foo": "bar"});
    callServer(payload, "json", parseData);
  }
});
