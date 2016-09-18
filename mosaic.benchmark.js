'use strict';

const Benchmark = require('benchmark');
const benchmarks = require('beautify-benchmark');

const suite = new Benchmark.Suite();

const string = 'String-by-string';
const length = 4;

function mosaicFor(input, len) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    output += i < input.length - len
      ? '*'
      : input[i];
  }
  return output;
}
function mosaicRepeat(input, len) {
  return '*'.repeat(input.length - len) + input.slice(-len);
}

console.log('mosaic by for:', mosaicFor(string, length));
console.log('mosaic by repeat:', mosaicRepeat(string, length));


suite
.add('mosaic by for', function() {
  mosaicFor(string, length);
})
.add('mosaic by repeat', function() {
  mosaicRepeat(string, length);
})
.on('cycle', function(event) {
  // console.log(String(event.target));
  benchmarks.add(event.target);
})
.on('complete', function() {
  // console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  benchmarks.log();
})
.run({async: true});
