$(function() {
  'use strict'

  $('.run .protocol-buffers').click(pbCallback);

  function pbCallback(event) {
    let payload = {foo: "bar"};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/protocol-buffers');
    xhr.setRequestHeader('Content-Type', '');
    xhr.onload = function() {
      debugger;
    }
  }
});
