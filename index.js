
var detector = require('detector');

(function CATCH_CONSOLE(){
  if (typeof window === "undefined") { return; }
  var win = window;

  function now() {
    return Date.now ? Date.now() : (new Date()).getTime();
  }

  var __TIMER__ = {};
  var doc = document;
  var consoleBox = doc.getElementById('console-log');

  var MockConsole = {
    log: function(){
      if (win.console) {
        win.console.log.apply(win, arguments);
      }
    },
    time: function(name) {
      __TIMER__[name] = now();
    },
    timeEnd: function(name) {
      MockConsole.log('| ' + name + ' | ' + (now() - __TIMER__[name]) + 'ms |');
    }
  };

  if (win.__isBrowser__ && win.__cache_console__){
    MockConsole.log = function() {
      consoleBox.appendChild(doc.createTextNode(Array.prototype.join.call(arguments, ' ')));
      consoleBox.appendChild(doc.createElement('br'));
    };
  }

  // totoro test, without index.html
  if (!win.console ||
      !win.__isBrowser__ ||
      win.__cache_console__
      ) {
    win.console = MockConsole;
  }
})();


var times = 10000;

if (detector.os) {
  console.log('* OS:', detector.os.name + '/' + detector.os.fullVersion);
  console.log('* Browser:', detector.browser.name + '/' + detector.browser.fullVersion);
  console.log('* Engine:', detector.engine.name + '/' + detector.engine.fullVersion);
  console.log();
} else {
  console.log('Nodejs / iojs');
}


var desc_new_string = "new String() " + times + " times";
console.time(desc_new_string);
for (var i=0; i<times; i++) {
  new String("Error");
}
console.timeEnd(desc_new_string);

var desc_new_object = "new Object() " + times + " times";
console.time(desc_new_object);
for (var i=0; i<times; i++) {
  new Object();
}
console.timeEnd(desc_new_object);

var desc_native_object = "native Object {} " + times + " times";
console.time(desc_native_object);
for (var i=0; i<times; i++) {
  var o = {'Error':"Error"};
}
console.timeEnd(desc_native_object);



var desc_new_error = "new Error() " + times + " times";
console.time(desc_new_error);
for (var i=0; i<times; i++) {
  new Error('Error');
}
console.timeEnd(desc_new_error);


var desc_catch_1_error = "catch 1 error " + times + " times";
console.time(desc_catch_1_error);
for (var i=0; i<times; i++) {
  try {
    throw error;
  } catch(ex) {}
}
console.timeEnd(desc_catch_1_error);

var str = "Error";
var desc_catch_1_string = "catch 1 string " + times + " times";
console.time(desc_catch_1_string);
for (var i=0; i<times; i++) {
  try {
    throw str;
  } catch(ex) {}
}
console.timeEnd(desc_catch_1_string);

var num = 0;
var desc_catch_1_number = "catch 1 number " + times + " times";
console.time(desc_catch_1_number);
for (var i=0; i<times; i++) {
  try {
    throw num;
  } catch(ex) {}
}
console.timeEnd(desc_catch_1_number);


var desc_catch_new_error = "catch throw new Error() " + times + " times";
console.time(desc_catch_new_error);
for (var i=0; i<times; i++) {
  try {
    throw new Error("Error");
  } catch(ex) {}
}
console.timeEnd(desc_catch_new_error);

var desc_catch_new_string = "catch throw new String " + times + " times";
console.time(desc_catch_new_string);
for (var i=0; i<times; i++) {
  try {
    throw new String("Error");
  } catch(ex) {}
}
console.timeEnd(desc_catch_new_string);

var desc_catch_native_string = "catch throw native string " + times + " times";
console.time(desc_catch_native_string);
for (var i=0; i<times; i++) {
  try {
    throw "Error";
  } catch(ex) {}
}
console.timeEnd(desc_catch_native_string);




var error = new String('Error');
var desc_throw_1_string = "throw 1 String 1 times";
try {
  try {
    console.time(desc_throw_1_string);
    throw error;
  } finally {
    console.timeEnd(desc_throw_1_string);
  }
} catch (ex){}

var error = new Error('Error');
var desc_throw_1_error = "throw 1 error 1 times";
try {
  try {
    console.time(desc_throw_1_error);
    throw error;
  } finally {
    console.timeEnd(desc_throw_1_error);
  }
} catch (ex){}
