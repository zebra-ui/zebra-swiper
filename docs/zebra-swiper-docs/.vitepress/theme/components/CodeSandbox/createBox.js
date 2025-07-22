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

import { autoplay } from './example/autoplay'
import { base } from './example/base'
import { cards } from './example/cards'
import { carousel } from './example/carousel'
import { controller } from './example/controller'
import { coverflow } from './example/coverflow'
import { creative } from './example/creative'
import { cube } from './example/cube'
import { fade } from './example/fade'
import { flip } from './example/flip'
import { freemode } from './example/freemode'
import { loop } from './example/loop'
import { navigation } from './example/navigation'
import { pagination } from './example/pagination'
import { scrollbar } from './example/scrollbar'
import { thumbs } from './example/thumbs'
import { virtual } from './example/virtual'

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
  return new Promise((resolve) => {
    const paramsMap = {
      base,
      cards,
      carousel,
      controller,
      coverflow,
      creative,
      cube,
      fade,
      flip,
      freemode,
      loop,
      navigation,
      pagination,
      scrollbar,
      thumbs,
      virtual,
      autoplay
    }
    const codeSandBoxParams = uniappFiles(paramsMap[page], page)
    fetch(`https://codesandbox.io/api/v1/sandboxes/define?json=1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        files: codeSandBoxParams
      })
    })
      .then((res) => res.json())
      .then(({ sandbox_id }) => {
        resolve(
          `https://codesandbox.io/p/sandbox/${sandbox_id}?file=/src/pages/index/index.vue`
        )
      })
  })
}
