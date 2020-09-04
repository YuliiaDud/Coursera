(function (){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i< names.length; i++) {
    var firstLetter = names[i].charAt(0);
    var result = firstLetter.toLowerCase();
    if (result === "j") {
      byeSpeaker.bye(names[i]);
    } else {
      helloSpeaker.hello(names[i]);
    }
  }
})();
