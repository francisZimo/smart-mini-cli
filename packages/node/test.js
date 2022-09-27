
const {fork,spawn} = require('child_process')

// 1、默认 silent 为 false，子进程会输出 output from the child3
// fork('./test.js', {
//     silent: true //true
//   });

//   const child3 = fork('./test.js', {
//     silent: true
//   });
  
//   child3.stdout.setEncoding('utf8');
//   child3.stdout.on('data', function (data) {
//     console.log('stdout 中输出：');
//     console.log(data);
//   });
// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-al']);

// // 输出相关的数据
// ls.stdout.on('data', function(data){
//     console.log('data from child: ' + data);
// });

// // 错误的输出
// ls.stderr.on('data', function(data){
//     console.log('error from child: ' + data);
// });

// // 子进程结束时输出
// ls.on('close', function(code){
//     console.log('child exists with code: ' + code);
// });

//  ls = spawn('ls', ['-al'], {
//     stdio: 'inherit'
//   });
  
//   ls.on('close', function(code){
//     console.log('child exists with code: ' + code);
//   });
  
  // 3.2、场景2: 命令存在，但运行过程报错
const child2 = spawn('ls', ['nonexistFile']);

child2.stderr.on('data', function(data){
    console.log('Error msg from process 2: ' + data);
});

child2.on('error', (err) => {
  console.log('Failed to start child process 2: ', err);
});


 
