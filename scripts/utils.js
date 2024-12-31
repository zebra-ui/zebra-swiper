const fs = require('fs').promises
const path = require('path')
const { exec } = require('child_process')
const util = require('util')
const signale = require('signale')
const execPromise = util.promisify(exec)

const paths = {
  sourceChangelog: path.join(
    __dirname,
    '../example/normal/uni_modules/zebra-swiper/changelog.md'
  ),
  sourcePackage: path.join(
    __dirname,
    '../example/normal/uni_modules/zebra-swiper/package.json'
  ),
  targetChangelogs: [
    path.join(__dirname, '../src/changelog.md'),
    path.join(__dirname, '../docs/zebra-swiper-docs/guide/changedlog.md')
  ],
  targetPackages: [
    path.join(__dirname, '../package.json'),
    path.join(__dirname, '../src/package.json')
  ],
  srcDir: path.join(__dirname, '../src')
}

async function readJSON(filePath) {
  const data = await fs.readFile(filePath, 'utf8')
  return JSON.parse(data)
}

async function writeJSON(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8')
}

async function execCommand(command, options = {}) {
  try {
    const { stdout, stderr } = await execPromise(command, options)
    if (stderr) signale.warn(stderr)
    return stdout.trim()
  } catch (error) {
    throw new Error(`执行命令 "${command}" 失败: ${error.message}`)
  }
}

module.exports = {
  paths,
  readJSON,
  writeJSON,
  execCommand
}
