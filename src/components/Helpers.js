export default function chooseColor(color) {
	let rgb = color.split(',');
	let contrast = Math.round(((parseInt(rgb[0], 10) * 299) + (parseInt(rgb[1], 10) * 587) + (parseInt(rgb[2], 10) * 114)) / 1000);
	let finalColor = '';

	if (contrast > 125) {
		finalColor = '#000000'
	} else { 
		finalColor = '#ffffff'
	}

	return finalColor;
}