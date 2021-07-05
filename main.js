function displayArray(arr, value) {
	let html = '';
	arr.forEach(item => {
		const out = display(item);
		html += out;
	});
	if (value) {
		return '<div class="array pairvalue">' + html + '</div>';
	} else {
		return '<div class="array">' + html + '</div>';
	}
};

function displayObject(object, value) {
	if (value) {
		var returnstr = '<div class="object pairvalue">';
	} else {
		var returnstr = '<div class="object">';
	}
	Object.keys(object).forEach(key => {
		display(object[key])
		returnstr += '<div class="pair"><p class="pairkey">' + key + ': </p>' + display(object[key], true) + '</div>';
	});
	returnstr += '</div>';
	return returnstr;
};

function display(object, value) {
	if (typeof object === 'object') {
		if (object instanceof Array) {
			return displayArray(object, value);
		} else {
			return displayObject(object, value);
		};
	} else if (typeof object === 'symbol') {
		return `<p class="${typeof object} pairvalue">"${object.toString()}"</p>`;
	} else {
		if (value) {
			if (typeof object === 'string') {
				return `<p class="${typeof object} pairvalue">"${object}"</p>`;
			} else {
				return `<p class="${typeof object} pairvalue">${object}</p>`;
			};
		} else {
			if (typeof object === 'string') {
				return `<p class="${typeof object}">"${object}"</p>`;
			} else {
				return `<p class="${typeof object}">${object}</p>`;
			};
		}
	};
};