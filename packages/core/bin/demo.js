#!/usr/bin/env node

import { Command } from 'commander'
import { readFile } from 'fs/promises'
import fs from 'fs'
import path from 'path'

const program = new Command()

const packageJson = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
)

program.version(packageJson.version, '-v, --version', 'cli的最新版本')

program
  .command('gitreset')
    .description('执行回退到上一个版本')
    .action(async () => {
      try {
        await exec('git add .') // 解决未add的情况下不能reset
        handleExeRes(await exec('git reset --hard HEAD'))
      } catch (err) {
        console.log(chalk.red(`err: ${err}`))
      }
    })

program.parse(process.argv)