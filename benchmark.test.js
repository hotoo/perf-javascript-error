
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var error = new Error('Error');
var string =  'String';
var object = {type:'Error', message:'Error'};

suite
//.add('new String', function(){
  //new String("Error");
//})
//.add('new Object', function(){
  //new Object();
//})
//.add('native Object', function(){
  //var o = {'Error':"Error"};
//})
//.add('new Error', function(){
  //new Error('Error');
//})
.add('try & throw error & catch', function(){
  try {
    throw error;
  } catch(ex) {}
})
.add('try & throw string & catch', function(){
  try {
    throw string;
  } catch(ex) {}
})
.add('try & throw native string & catch', function(){
  try {
    throw 'String';
  } catch(ex) {}
})
.add('try & throw native object & catch', function(){
  try {
    throw {
      type: 'Error',
      message: 'String'
    };
  } catch(ex) {}
})
.add('try & throw new Error & catch', function(){
  try {
    throw new Error('Error');
  } catch(ex) {}
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function(){
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({async:true})
