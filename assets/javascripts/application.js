//= require jquery.min
//= require_tree .


function callServer(payload, target) {
  'use strict'
  let startTime = new Date().getMilliseconds();
  $(`.start-times .${target}`).text(startTime);

  $.ajaxPrefilter('message-pack', function(options) {
    console.log(options);
  });

  var req = new XMLHttpRequest();
  req.open('POST', `/${target}`);
  req.addEventListener("load", function() {
    console.log(req.response);
    let endTime = new Date().getMilliseconds();
    $(`.end-times .${target}`).text(endTime);
    let totalTime = endTime - startTime;
    $(`.total-times .${target}`).text(totalTime);
  });
  req.send(payload);

  // $.ajax({
  //   url: `/${target}`,
  //   data: payload,
  //   dataType: target,
  //   processData: false,
  //   method: "post",
  //   success: function(data) {
  //     console.log(data)
  //     let endTime = new Date().getMilliseconds();
  //     $(`.end-times .${target}`).text(endTime);
  //     let totalTime = endTime - startTime;
  //     $(`.total-times .${target}`).text(totalTime);
  //   }
  // });
}
