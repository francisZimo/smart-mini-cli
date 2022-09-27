const {fork} = require('child_process')
// 父进程
const child3 = fork('./child.js');

child3.on('message', (m)=>{
  console.log('message from child: ' + JSON.stringify(m));
});

child3.send({from: 'parent'});

