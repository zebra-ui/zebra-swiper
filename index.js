import Swiper from "./libs/core.js";
import Autoplay from './modules/autoplay/autoplay.js';
import FreeMode from './modules/free-mode/free-mode.js';
import EffectFade from './modules/effect-fade/effect-fade.js';
import EffectCube from './modules/effect-cube/effect-cube.js';
import EffectCoverflow from './modules/effect-coverflow/effect-coverflow.js';
import EffectFlip from './modules/effect-flip/effect-flip.js';
import EffectCards from './modules/effect-cards/effect-cards.js';
import EffectCreative from './modules/effect-creative/effect-creative.js';
import EffectPanorama from './modules/effect-panorama/effect-panorama.js';
import EffectCarousel from './modules/effect-carousel/effect-carousel.js';
import Navigation from './modules/navigation/navigation.js';
import Pagination from './modules/pagination/pagination.js';
import Thumbs from './modules/thumbs/thumbs.js';
import Scrollbar from './modules/scrollbar/scrollbar.js';
import Virtual from './modules/virtual/virtual.js';
import WillChange from './modules/will-change/will-change.js';
export {
	default as Swiper,
	default
}
from './libs/core.js';
const modules = [Autoplay, FreeMode, EffectFade, EffectCube, EffectCoverflow, EffectFlip, EffectCards, EffectCreative,
	EffectPanorama, EffectCarousel, Navigation, Pagination, Thumbs, Scrollbar, WillChange, Virtual
];
Swiper.use(modules);
