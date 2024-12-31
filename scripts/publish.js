const signale = require('signale')
const { paths, execCommand, readJSON } = require('./utils')

async function publishToNpm(isBeta = false) {
  try {
    const packageJson = await readJSON(paths.srcDir + '/package.json')
    const { version } = packageJson

    signale.pending(`正在发布${isBeta ? ' Beta' : ''}包到 npm...`)

    if (isBeta && !version.includes('-beta.')) {
      signale.error("Beta 版本的版本号必须包含 '-beta.x' 后缀")
      throw new Error('无效的 Beta 版本号')
    }

    const publishTag = isBeta ? '--tag beta' : ''
    await execCommand(`npm publish ${publishTag}`, { cwd: paths.srcDir })
    signale.success('npm 发布成功！')
  } catch (error) {
    signale.error('npm 发布失败:', error.message)
    throw error
  }
}

if (require.main === module) {
  publishToNpm()
}

module.exports = publishToNpm
