const signale = require('signale')
const { paths, readJSON, writeJSON } = require('./utils')

async function syncVersion() {
  try {
    signale.pending('正在同步版本号...')

    // 读取源版本号
    const sourcePackage = await readJSON(paths.sourcePackage)
    const { version } = sourcePackage

    // 更新所有目标 package.json
    for (const packagePath of paths.targetPackages) {
      const packageJson = await readJSON(packagePath)
      packageJson.version = version
      await writeJSON(packagePath, packageJson)
      signale.success(`已更新 ${packagePath} 的版本号为 ${version}`)
    }

    return version
  } catch (error) {
    signale.error('同步版本号失败:', error.message)
    throw error
  }
}

if (require.main === module) {
  syncVersion()
}

module.exports = syncVersion
