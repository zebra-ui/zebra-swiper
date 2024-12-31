const fs = require('fs')
const path = require('path')

// 获取根目录路径
const rootDir = path.join(__dirname, '..')

// 读取根目录的 README.md 文件内容
const rootReadmePath = path.join(rootDir, 'README.md')
const rootReadmeContent = fs.readFileSync(rootReadmePath, 'utf8')

// 将内容同步到 src/readme.md
const srcReadmePath = path.join(rootDir, 'src', 'readme.md')
fs.writeFileSync(srcReadmePath, rootReadmeContent)

// 将内容同步到 example/normal/uni_modules/zebra-swiper/readme.md
const demoReadmePath = path.join(
  rootDir,
  'example',
  'normal',
  'uni_modules',
  'zebra-swiper',
  'readme.md'
)
fs.writeFileSync(demoReadmePath, rootReadmeContent)

console.log('README 同步完成')
