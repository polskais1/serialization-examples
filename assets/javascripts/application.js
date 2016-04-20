//= require jquery.min
//= require_tree .


function callServer(payload, target, parseData) {
  'use strict'
  let startTime = new Date().getMilliseconds();
  $(`.start-times .${target}`).text(startTime);

  var req = new XMLHttpRequest();
  req.open('POST', `/${target}`);
  req.setRequestHeader('Content-Type', `application/${target};charset=UTF-8`);
  req.addEventListener('load', function() {
    let parsedResponse = parseData(req.response);
    let endTime = new Date().getMilliseconds();
    $(`.end-times .${target}`).text(endTime);
    let totalTime = endTime - startTime;
    $(`.total-times .${target}`).text(totalTime);
    console.log(parsedResponse)
  });
  req.send(payload);
}
