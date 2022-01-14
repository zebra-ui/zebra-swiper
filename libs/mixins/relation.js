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
		beforeDestroy() {
			uni.$off("childrenReady" + this._uid)
		},
	};
}
