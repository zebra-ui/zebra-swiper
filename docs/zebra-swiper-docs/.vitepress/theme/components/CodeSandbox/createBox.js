import {
  fileAppVue,
  fileIndexHtml,
  filePackageJson,
  fileViteConfigJs,
  srcPagesJson,
  srcMainJs,
  srcManifestJson,
  componentsDemoBlock,
  componentsDemoItem,
  srcCommonJsData,
  srcGlobalDTs
} from './uniapp-common'

const commonFiles = {
  'sandbox.config.json': {
    content: {
      infiniteLoopProtection: true,
      hardReloadOnChange: false,
      view: 'browser',
      container: {
        node: '18'
      }
    }
  }
}

function uniappFiles(page, name) {
  return {
    'package.json': {
      content: filePackageJson(name)
    },
    'src/components/DemoBlock/DemoBlock.vue': {
      content: componentsDemoBlock
    },
    'src/components/DemoItem/DemoItem.vue': {
      content: componentsDemoItem
    },
    'src/common/js/data.js': {
      content: srcCommonJsData
    },
    'src/App.vue': {
      content: fileAppVue
    },
    'src/pages.json': {
      content: srcPagesJson
    },
    'src/main.js': {
      content: srcMainJs
    },
    'src/pages/index/index.vue': {
      content: page
    },
    'src/manifest.json': {
      content: srcManifestJson
    },
    'src/global.d.ts': {
      content: srcGlobalDTs
    },
    'index.html': {
      content: fileIndexHtml
    },
    'vite.config.js': {
      content: fileViteConfigJs
    },
    ...commonFiles
  }
}

export function createCodeSandbox(page) {
  return new Promise(async (resolve) => {
    const content = await import(/* @vite-ignore */ `./example/${page}`)
    const codeSandBoxParams = uniappFiles(content[page], page)
    fetch(
      `https://codesandbox.io/api/v1/sandboxes/define?environment=server&json=1`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          files: codeSandBoxParams
        })
      }
    )
      .then((res) => res.json())
      .then(({ sandbox_id }) => {
        resolve(
          `https://codesandbox.io/p/sandbox/${sandbox_id}?file=/src/pages/index/index.vue`
        )
      })
  })
}
