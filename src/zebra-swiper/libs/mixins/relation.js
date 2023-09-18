export function ChildrenMixin(parent, options = {}) {
	const indexKey = options.indexKey || 'index';
	return {
		inject: {
			[parent]: {
				default: null,
			},
		},
		mounted() {
			this.parent = this[parent];
			this.bindRelation();
		},
		// #ifdef VUE2
		beforeDestroy() {
			if (this.parent) {
				this.parent.children = this.parent.children.filter(
					(item) => item !== this
				);
				uni.$emit("childrenReady" + this.parent._uid, this);
			}
		},
		// #endif
		// #ifdef VUE3
		beforeUnmount() {
			if (this.parent) {
				this.parent.children = this.parent.children.filter(
					(item) => item !== this
				);
				uni.$emit("childrenReady" + this.parent._uid, this);
			}
		},
		// #endif
		methods: {
			bindRelation() {
				if (!this.parent || this.parent.children.indexOf(this) !== -1) {
					return;
				}
				const children = [...this.parent.children, this];
				this.parent.children = children;
				this.index = this.parent.children.indexOf(this);
				uni.$emit("childrenReady" + this.parent._uid, this);
			},
		},
	};
}

export function ParentMixin(parent) {
	return {
		provide() {
			return {
				[parent]: this,
			};
		},
		created() {
			this.children = [];
		},
		// #ifdef VUE2
		beforeDestroy() {
			uni.$off("childrenReady" + this._uid)
		},
		// #endif
		// #ifdef VUE3
		beforeUnmount() {
			uni.$off("childrenReady" + this._uid)
		},
		// #endif
	};
}
