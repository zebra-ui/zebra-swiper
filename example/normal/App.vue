<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@use '@/uni_modules/zebra-swiper/index.scss';
	@use "@/uni_modules/zebra-swiper/modules/pagination/pagination.scss";
	@use "@/uni_modules/zebra-swiper/modules/navigation/navigation.scss";
	@use "@/uni_modules/zebra-swiper/modules/scrollbar/scrollbar.scss";
	@use "@/uni_modules/zebra-swiper/modules/effect-fade/effect-fade.scss";
	@use "@/uni_modules/zebra-swiper/modules/effect-flip/effect-flip.scss";
	@use "@/uni_modules/zebra-swiper/modules/effect-cards/effect-cards.scss";
	@use "@/uni_modules/zebra-swiper/modules/effect-cube/effect-cube.scss";
	@use "@/uni_modules/zebra-swiper/modules/effect-creative/effect-creative.scss";
	@use "@/uni_modules/zebra-swiper/modules/virtual/virtual.scss";

	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	page {
		background-color: #e4ebf5;
	}

	.demo-swiper {
		padding-bottom: 16rpx;
	}
</style>