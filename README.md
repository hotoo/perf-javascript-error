
# Performance test for JavaScript Error

This is a performance test for JavaScript Error.

* Performance test for `new Error()`.
* Performance test for `throw error`.
* Performance test for `catch(error)`.

[Test it by you self](http://hotoo.me/perf-javascript-error/) and Open Developer Console.

## Local Test Result

1. MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. iojs@1.7.1
2. Windows 7, Firefox 32, totoro.
3. MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Opera 27.0
4. MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Firefox 37.0.2
5. Windows 7, Chrome 41.0.2272.118, totoro.
6. MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Chrome 43.0.2357.81 (64-bit).
7. Windows 7, IE 11, totoro.
8. Windows 7, IE 9, totoro.
9. Windows 7, IE 8, totoro.
10. MacBook Pro 15' 2014, 2.2GHz, 16GB 1600 MHZ DDR3. Safari 8.0.6


| Test \ Platform                       | 1.io | 2.ff  | 3.mac-op  | 4.mac-ff | 5.ch  | 6.mac-ch | 7.ie11 | 8.ie9 | 9.ie8 | 10.safari |
|---------------------------------------|------|-------|-----------|----------|-------|----------|--------|-------|-------|-----------|
| new String() 10000 times              | 1ms  | 2ms   | 0.366ms   | 1.65ms   | 1ms   | 0.455ms  | 5ms    | 4ms   | 16ms  | 4.932ms   |
| new Object() 10000 times              | 1ms  | 2ms   | 0.862ms   | 1.32ms   | 1ms   | 1.153ms  | 7ms    | 3ms   | 0ms   | 3.652ms   |
| native Object {} 10000 times          | 1ms  | 2ms   | 0.257ms   | 0.5ms    | 0ms   | 0.466ms  | 4ms    | 3ms   | 0ms   | 0.166ms   |
| new Error() 10000 times               | 43ms | 138ms | 131.499ms | 35.75ms  | 60ms  | 36.324ms | 23ms   | 15ms  | 16ms  | 20.023ms  |
| catch 1 error 10000 times             | 1ms  | 2ms   | 1.039ms   | 1.56ms   | 123ms | 39.712ms | 164ms  | 134ms | 31ms  | 5.029ms   |
| catch 1 string 10000 times            | 0ms  | 3ms   | 1.002ms   | 1.7ms    | 130ms | 41.259ms | 175ms  | 134ms | 16ms  | 4.744ms   |
| catch 1 number 10000 times            | 0ms  | 2ms   | 0.948ms   | 1.6ms    | 125ms | 41.834ms | 261ms  | 129ms | 31ms  | 5.739ms   |
| catch throw new Error() 10000 times   | 39ms | 210ms | 143.367ms | 52.34ms  | 190ms | 99.058ms | 266ms  | 143ms | 47ms  | 30.908ms  |
| catch throw new String 10000 times    | 2ms  | 4ms   | 1.389ms   | 2.74ms   | 136ms | 52.552ms | 108ms  | 125ms | 31ms  | 22.053ms  |
| catch throw native string 10000 times | 1ms  | 3ms   | 1.064ms   | 1.78ms   | 118ms | 42.266ms | 204ms  | 123ms | 47ms  | 4.729ms   |
| throw 1 String 1 time                 | 0ms  | 0ms   | 0.004ms   | 0.05ms   | 0ms   | 0.013ms  | 1ms    | 0ms   | 0ms   | 0.006ms   |
| throw 1 error 1 time                  | 0ms  | 0ms   | 0.004ms   | 0.06ms   | 0ms   | 0.007ms  | 0ms    | 0ms   | 0ms   | 0.005ms   |

## The Finally

* iojs, Firefox, Opera: 大部分时间消耗在 `new Error()` 上，`throw` 和 `catch` 消耗并不算太多。
  另外，`throw "string"` 比 `throw new Error()` 性能要高的多。
* Safari: 基本于 iojs 等相同，但是 `throw new String()` 也花费了较多时间。
* Chrome: `new Error()` 和 `throw`/`catch` 各自消耗差不多的时间。
* IE: `new Error()` 花费了很多的时间，但是 `throw`/`catch` 花费了更多时间，最高近 10 被于 `new Error()`。

这是粗略的分析结果，如果你有更好的结论，请 [提交你的反馈](https://github.com/hotoo/perf-javascript-error/issues) ：）

同时欢迎提供移动设备的数据。

![QR code for preview page url](./qrcode-preview.png)

## Develop

On master branch.

```
$ make publish
```
