const fs = require('fs').promises
const signale = require('signale')
const { paths } = require('./utils')

async function syncChangelog() {
  try {
    signale.pending('正在同步 changelog...')

    // 读取源 changelog
    const sourceContent = await fs.readFile(paths.sourceChangelog, 'utf8')

    // 复制到 src/changelog.md
    await fs.writeFile(paths.targetChangelogs[0], sourceContent, 'utf8')
    signale.success('已更新 src/changelog.md')

    // 更新文档 changelog
    const docsChangelog = await fs.readFile(paths.targetChangelogs[1], 'utf8')

    // 提取版本信息
    const versionWithDateRegex =
      /##\s+(\d+\.\d+\.\d+(?:-beta\.\d+)?)\s*（.*?）/g
    const changelogVersions = new Set()
    let match

    while ((match = versionWithDateRegex.exec(sourceContent)) !== null) {
      changelogVersions.add(match[1])
    }

    const outputVersionRegex = /###\s+(\d+\.\d+\.\d+(?:-beta\.\d+)?)/g
    const outputVersions = new Set()

    while ((match = outputVersionRegex.exec(docsChangelog)) !== null) {
      outputVersions.add(match[1])
    }

    // 找出需要插入的新版本
    const versionsToInsert = [...changelogVersions].filter(
      (version) => !outputVersions.has(version)
    )

    if (versionsToInsert.length === 0) {
      signale.info('没有新版本需要插入。')
      return
    }

    // 处理新版本的内容
    const insertPosition = docsChangelog.indexOf(
      '<!-- changedlog-unrelease -->'
    )
    if (insertPosition === -1) {
      throw new Error('未找到插入标记 <!-- changedlog-unrelease -->')
    }

    const newContent = versionsToInsert
      .map((version) => {
        const versionRegex = new RegExp(
          `## ${version}（.*?）(.*?)(?=##\\s+\\d|$)`,
          's'
        )
        const versionContentMatch = sourceContent.match(versionRegex)
        if (versionContentMatch) {
          return versionContentMatch[0]
            .replace(/^## /, '### ')
            .replace(/（.*?）/, '')
        }
        return ''
      })
      .join('\n\n')

    const updatedContent =
      docsChangelog.slice(
        0,
        insertPosition + '<!-- changedlog-unrelease -->'.length
      ) +
      '\n\n' +
      newContent +
      docsChangelog.slice(
        insertPosition + '<!-- changedlog-unrelease -->'.length
      )

    await fs.writeFile(paths.targetChangelogs[1], updatedContent, 'utf8')
    signale.success('已更新文档 changelog')
  } catch (error) {
    signale.error('同步 changelog 失败:', error.message)
    throw error
  }
}

if (require.main === module) {
  syncChangelog()
}

module.exports = syncChangelog
