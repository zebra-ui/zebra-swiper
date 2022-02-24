function addUnit(value) {
	if (value == null) {
		return undefined;
	}
	return /^-?\d+(\.\d+)?$/.test('' + value) ? value + 'rpx' : value;
}
export default addUnit;
