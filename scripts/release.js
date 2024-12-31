const inquirer = require('inquirer')
const signale = require('signale')
const syncChangelog = require('./sync-changelog')
const syncVersion = require('./sync-version')
const publishToNpm = require('./publish')
const commitToGithub = require('./commit-to-github')

async function promptReleaseType() {
  const { type } = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: '请选择发布类型:',
      choices: [
        { name: '正式版本', value: 'prod' },
        { name: 'Beta 版本', value: 'beta' },
        { name: '仅同步 Changelog', value: 'changelog' },
        { name: '仅同步版本号', value: 'version' },
        { name: '仅发布 NPM', value: 'npm' },
        { name: '仅提交 GitHub', value: 'github' }
      ]
    }
  ])
  return type
}

async function release() {
  try {
    const type = process.argv[2] || (await promptReleaseType())

    switch (type) {
      case 'prod':
        signale.start('开始发布正式版本...')
        await syncChangelog()
        await syncVersion()
        await publishToNpm(false)
        await commitToGithub(false)
        break

      case 'beta':
        signale.start('开始发布 Beta 版本...')
        await syncVersion()
        await publishToNpm(true)
        await commitToGithub(true)
        break

      case 'changelog':
        await syncChangelog()
        break

      case 'version':
        await syncVersion()
        break

      case 'npm':
        // eslint-disable-next-line no-case-declarations
        const { isBetaPublish } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'isBetaPublish',
            message: '是否发布为 Beta 版本?',
            default: false
          }
        ])
        await publishToNpm(isBetaPublish)
        break

      case 'github':
        // eslint-disable-next-line no-case-declarations
        const { isBetaCommit } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'isBetaCommit',
            message: '是否标记为 Beta 版本?',
            default: false
          }
        ])
        await commitToGithub(isBetaCommit)
        break
    }

    signale.complete('发布流程执行完成！')
  } catch (error) {
    signale.fatal('发布过程出错:', error.message)
    process.exit(1)
  }
}

release()
