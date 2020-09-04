(function (window){
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.hello = function (name) {
    console.log(speakWord + " " + name);
  }
 window.helloSpeaker = helloSpeaker;
})(window);
