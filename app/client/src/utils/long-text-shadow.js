function longTextShadow(color = '#000', offsetsAmount = 10) {
	let shadows = [];

	for (let offset = 1; offset <= offsetsAmount; offset += 1) {
		shadows.push(`${offset}px ${offset}px ${color}`);
	}

	return shadows.join(', ');
}


export default longTextShadow;