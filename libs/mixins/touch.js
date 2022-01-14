export const touchMixins = {
	data() {
		return {
			direction: "",
			deltaX: 0,
			deltaY: 0,
			offsetX: 0,
			offsetY: 0,
			startX: 0,
			startY: 0
		};
	},
	methods: {
		getDirection(x, y) {
			if (x > y && x > 10) {
				return 'horizontal';
			}
			if (y > x && y > 10) {
				return 'vertical';
			}
			return '';
		},
		resetTouchStatus() {
			this.direction = '';
			this.deltaX = 0;
			this.deltaY = 0;
			this.offsetX = 0;
			this.offsetY = 0;
		},
		touchStart(event) {
			this.resetTouchStatus();
			const touch = event.touches[0];
			this.startX = touch.clientX;
			this.startY = touch.clientY;
		},
		touchMove(event) {
			const touch = event.touches[0];
			this.deltaX = touch.clientX - this.startX;
			this.deltaY = touch.clientY - this.startY;
			this.offsetX = Math.abs(this.deltaX);
			this.offsetY = Math.abs(this.deltaY);
			this.direction =
				this.direction || this.getDirection(this.offsetX, this.offsetY);
		}
	}
}
