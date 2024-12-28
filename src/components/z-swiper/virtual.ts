import type { VNode } from 'vue'
import type { RenderVirtual } from '../../types/components/z-swiper/virtual'

export const renderVirtual: RenderVirtual = (
  swiperRef,
  slides,
  virtualData
) => {
  if (!virtualData) return null

  const getSlideIndex = (index: number): number => {
    let slideIndex = index
    if (index < 0) {
      slideIndex = slides.length + index
    } else if (slideIndex >= slides.length) {
      slideIndex = slideIndex - slides.length
    }
    return slideIndex
  }

  const style = swiperRef.value.isHorizontal()
    ? {
        [swiperRef.value.rtlTranslate ? 'right' : 'left']:
          `${virtualData.offset}px`
      }
    : {
        top: `${virtualData.offset}px`
      }

  const { from, to } = virtualData
  const loopFrom = swiperRef.value.params.loop ? -slides.length : 0
  const loopTo = swiperRef.value.params.loop ? slides.length * 2 : slides.length

  let slidesToRender: VNode[] = []

  for (let i = loopFrom; i < loopTo; i += 1) {
    if (i >= from && i <= to && slidesToRender.length < slides.length) {
      // @ts-ignore
      slides[getSlideIndex(i)].virtualIndex = getSlideIndex(i)
      slidesToRender.push(slides[getSlideIndex(i)])
    }
  }

  slidesToRender = slidesToRender.map((slide) => {
    if (!slide.props) slide.props = {}
    if (!slide.props.style) slide.props.style = {}
    slide.props.style = style
    return slide
  })

  return slidesToRender
}
