const inquirer = require('inquirer')

// const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "请输入您的用户名"
  },
  {
    type: 'password',
    name: 'pwd',
    message: "请输入您的密码"
  },
  {
    type: 'input',
    name: 'year',
    message: "请输入您的年龄"
  },
  {
    type: 'list',
    name: 'gender',
    message: "请选择您的性别",
    default: 0,
    choices: [
      { value: 1, name: '男' },
      { value: 2, name: '女' }
    ]
  },
  {
    type: 'rawlist',
    name: 'dream',
    message: '你想赚多少钱',
    default: 0,
    choices: [
      { value: 1, name: '100万' },
      { value: 2, name: '1000万' },
      { value: 3, name: '1个亿' },
    ]
  },
  {
    type: 'checkbox',
    name: 'color',
    message: '你最喜欢的颜色',
    default: 'red',
    choices: [
      { value: 'red', name: '红' },
      { value: 'yellow', name: '黄' },
      { value: 'blue', name: '蓝' },
      { value: 'green', name: '绿' },
    ]
  },
  {
     type: 'editor',
     name: 'save',
     message: '请保存你的梦想到文件'
    }
]
inquirer.prompt(questions).then(answers => {
  console.log(`${answers['name']}，祝愿您早日实现梦想!` )
  console.log(answers)
})
// getInquirer().then((res) => {
// 	console.log(res)
// })
// function getInquirer() {
// 	return inquirer.prompt([
// 		{
// 			name: 'projectName',
// 			message: 'project name',
// 			default: 'project',
// 		},
// 		{
// 			name: 'projectVersion',
// 			message: '项目版本号',
// 			default: '1.0.0',
// 		},
// 	])
// }
