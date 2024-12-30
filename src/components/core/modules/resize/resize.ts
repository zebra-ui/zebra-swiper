import { isWeb } from '../../../shared/utils'
import type { SwiperInterface } from '../../../../types/swiper-class'

export default function Resize({
  swiper,
  on,
  emit
}: {
  swiper: SwiperInterface
  on: (event: string, handler: () => void) => void
  emit: (event: string, ...args: any[]) => void
}): void {
  let observer: ResizeObserver | null = null
  let animationFrame: number | null = null

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return
    emit('beforeResize')
    emit('resize')
  }

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return

    observer = new ResizeObserver((entries) => {
      animationFrame = window.requestAnimationFrame(() => {
        const { width, height } = swiper
        let newWidth = width
        let newHeight = height
        entries.forEach(({ contentBoxSize, contentRect, target }) => {
          if (target && target !== swiper.el) return
          newWidth = contentRect
            ? Math.round(contentRect.width)
            : Math.round((contentBoxSize[0] || contentBoxSize).inlineSize)
          newHeight = contentRect
            ? Math.round(contentRect.height)
            : Math.round((contentBoxSize[0] || contentBoxSize).blockSize)
        })
        if (newWidth !== width || newHeight !== height) {
          resizeHandler()
        }
      })
    })

    observer.observe(swiper.el as HTMLElement)
  }

  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame)
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el as HTMLElement)
      observer = null
    }
  }

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return
    emit('orientationchange')
  }

  on('init', () => {
    if (isWeb()) {
      if (
        swiper.params.resizeObserver &&
        typeof window.ResizeObserver !== 'undefined'
      ) {
        createObserver()
        return
      }
      window.addEventListener('resize', resizeHandler)
      window.addEventListener('orientationchange', orientationChangeHandler)
    } else {
      // @ts-ignore
      if (uni) {
        // #ifdef APP || MP-WEIXIN
        // @ts-ignore
        uni.onWindowResize(resizeHandler)
        // #endif
      }
    }
  })

  on('destroy', () => {
    if (isWeb()) {
      removeObserver()
      window.removeEventListener('resize', resizeHandler)
      window.removeEventListener('orientationchange', orientationChangeHandler)
    } else {
      // @ts-ignore
      if (uni) {
        // #ifdef APP || MP-WEIXIN
        // @ts-ignore
        uni.offWindowResize(resizeHandler)
        // #endif
      }
    }
  })
}
