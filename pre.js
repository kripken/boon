
if (typeof Module === 'undefined') Module = {};

Module.arguments = ['-nofullscreen', '-nosound'];
Module.screenIsReadOnly = true;

(function() {
  var start = 0;
  var mean = 0;
  var reportTime = Date.now();

  Module.preMainLoop = function() {
    start = Date.now();
  };
  Module.postMainLoop = function() {
    var now = Date.now();
    var time = now - start;
    if (mean == 0) {
      mean = time;
    } else {
      mean = 0.1*time + 0.9*mean;
    }
    if (now > reportTime + 2000) {
      var fps = 1000/mean;
      console.log('js fps: ' + Math.round(fps));
      reportTime = now;
    }
  };
})();

