
# Performance test for JavaScript Error

This is a performance test for JavaScript Error.

* Performance test for `new Error()`.
* Performance test for `throw error`.
* Performance test for `catch(error)`.

[Test it by you self](http://hotoo.me/perf-javascript-error/) and Open Developer Console.

## Local Test Result

* `T0`: MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. iojs@1.7.1
* `T1`: Windows 7, Chrome 41.0.2272.118, totoro.
* `T2`: Windows 7, Firefox 32, totoro.
* `T3`: Windows 7, IE 11, totoro.
* `T4`: Windows 7, IE 9, totoro.
* `T5`: Windows 7, IE 8, totoro.
* `T6`: MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Chrome 43.0.2357.81 (64-bit).
* `T7`: MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Firefox 37.0.2
* `T8`: MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Safari 8.0.6


| Test \ Platform                       | T0   | T1    | T2    | T3    | T4    | T5   | T6       | T7      | T8       | T9        |
|---------------------------------------|------|-------|-------|-------|-------|------|----------|---------|----------|-----------|
| new String() 10000 times              | 1ms  | 1ms   | 2ms   | 5ms   | 4ms   | 16ms | 0.455ms  | 1.65ms  | 4.932ms  | 0.366ms   |
| new Object() 10000 times              | 1ms  | 1ms   | 2ms   | 7ms   | 3ms   | 0ms  | 1.153ms  | 1.32ms  | 3.652ms  | 0.862ms   |
| native Object {} 10000 times          | 1ms  | 0ms   | 2ms   | 4ms   | 3ms   | 0ms  | 0.466ms  | 0.5ms   | 0.166ms  | 0.257ms   |
| new Error() 10000 times               | 43ms | 60ms  | 138ms | 23ms  | 15ms  | 16ms | 36.324ms | 35.75ms | 20.023ms | 131.499ms |
| catch 1 error 10000 times             | 1ms  | 123ms | 2ms   | 164ms | 134ms | 31ms | 39.712ms | 1.56ms  | 5.029ms  | 1.039ms   |
| catch 1 string 10000 times            | 0ms  | 130ms | 3ms   | 175ms | 134ms | 16ms | 41.259ms | 1.7ms   | 4.744ms  | 1.002ms   |
| catch 1 number 10000 times            | 0ms  | 125ms | 2ms   | 261ms | 129ms | 31ms | 41.834ms | 1.6ms   | 5.739ms  | 0.948ms   |
| catch throw new Error() 10000 times   | 39ms | 190ms | 210ms | 266ms | 143ms | 47ms | 99.058ms | 52.34ms | 30.908ms | 143.367ms |
| catch throw new String 10000 times    | 2ms  | 136ms | 4ms   | 108ms | 125ms | 31ms | 52.552ms | 2.74ms  | 22.053ms | 1.389ms   |
| catch throw native string 10000 times | 1ms  | 118ms | 3ms   | 204ms | 123ms | 47ms | 42.266ms | 1.78ms  | 4.729ms  | 1.064ms   |
| throw 1 String 1 time                 | 0ms  | 0ms   | 0ms   | 1ms   | 0ms   | 0ms  | 0.013ms  | 0.05ms  | 0.006ms  | 0.004ms   |
| throw 1 error 1 time                  | 0ms  | 0ms   | 0ms   | 0ms   | 0ms   | 0ms  | 0.007ms  | 0.06ms  | 0.005ms  | 0.004ms   |
