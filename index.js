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
import Navigation from './modules/navigation/navigation.js';
import Pagination from './modules/pagination/pagination.js';
import Thumbs from './modules/thumbs/thumbs.js';
import Scrollbar from './modules/scrollbar/scrollbar.js';
import WillChange from './modules/will-change/will-change.js';
export {
	default as Swiper,
	default
}
from './libs/core.js';
const modules = [Autoplay, FreeMode, EffectFade, EffectCube, EffectCoverflow, EffectFlip, EffectCards, EffectCreative,
	EffectPanorama, Navigation, Pagination, Thumbs, Scrollbar, WillChange
];
Swiper.use(modules);
