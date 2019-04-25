let Promise1 = require('./promise2');
let p = new Promise1(function (resolve, reject) {
  //setTimeout(() => {
  resolve('xx')
  //}, 1000);
})
// promise 中 每次调用then 都应该返回一个新的promise 
// promise的实例只能成功或者失败  不能既成功又失败
p.then(function (data) {
  throw new Error()
}, function (err) {
  console.log(err);
}).then(function (data) {
  console.log('success', data)
}, function (err) {
  console.log(err);
})

