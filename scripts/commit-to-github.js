const signale = require('signale')
const { readJSON, execCommand } = require('./utils')

async function commitToGithub(isBeta = false) {
  try {
    const packageJson = await readJSON('./package.json')
    const { version } = packageJson
    const tagName = version

    signale.pending('添加文件到暂存区...')
    await execCommand('git add .')

    signale.pending('提交更改...')
    await execCommand(`git commit -m "release: ${version}"`)

    signale.pending('创建标签...')
    const tagMessage = isBeta ? 'Beta Release' : 'Release'
    const tagCommand = isBeta
      ? `git tag -a ${tagName} -m "${tagMessage}" --force`
      : `git tag -a ${tagName} -m "${tagMessage}"`
    await execCommand(tagCommand)

    signale.pending('推送到远程仓库...')
    await execCommand('git push')
    const pushTagsCommand = isBeta
      ? 'git push --tags --force'
      : 'git push --tags'
    await execCommand(pushTagsCommand)

    signale.success('Git 操作完成！')
  } catch (error) {
    signale.error('Git 操作失败:', error.message)
    throw error
  }
}

if (require.main === module) {
  commitToGithub()
}

module.exports = commitToGithub
