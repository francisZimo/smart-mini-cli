#! /usr/bin/env node

const program =  require('commander')
const chalk = require('chalk')
const logSymbols=require('log-symbols')
const ora = require('ora')

// import logSymbols from 'log-symbols'
program.usage('<project-name>').parse()
console.log(program.args)



console.log(chalk.green('lib/green'))
console.log(chalk.red('lib/green'))
console.log(logSymbols.success,chalk.yellow('执行成功'))

function sleep(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },3000)
       
    })
}
async function test(){
    await sleep()
}


const spinner =ora('下载模板')
spinner.start()
test()
spinner.fail()

// spinner.succeed()




// program
//     .version(`version is ${require('../package.json').version}`)
//     .command('create')
//     .action((name,cmd)=>{
//         console.log(11)
//     })
//     .parse()