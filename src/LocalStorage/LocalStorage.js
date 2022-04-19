const addToDb = (id) => {
	let cart;

	// Get cart
	const addedCources = localStorage.getItem("cources");
	if (addedCources) {
		cart = JSON.parse(addedCources);
	} else {
		cart = {};
	}

	// Add quantity
	const quantity = cart[id];
	if (quantity) {
		const newQuantity = quantity + 1;
		cart[id] = newQuantity;
	} else {
		cart[id] = 1;
	}

	// Set cources into DB
	localStorage.setItem("cources", JSON.stringify(cart));
};

const deleteCource = (id) => {
	const addedCources = localStorage.getItem("cart");
	if (addedCources) {
		const cart = JSON.parse(addedCources);
		if (id in cart) {
			delete cart[id];
			// Set cources into DB
			localStorage.setItem("cources", JSON.stringify(cart));
		}
	}
};

export { addToDb, deleteCource };
