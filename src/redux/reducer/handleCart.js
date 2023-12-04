const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // Check if product already in cart
      const existingProduct = state.find((x) => x.id === product.id);

      if (existingProduct) {
        // Increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add the product to the cart with quantity 1
        return [...state, { ...product, qty: 1 }];
      }

    case "DELITEM":
      const productToRemove = state.find((x) => x.id === product.id);

      if (productToRemove && productToRemove.qty === 1) {
        // Remove the product if its quantity is 1
        return state.filter((item) => item.id !== productToRemove.id);
      } else {
        // Decrease the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    default:
      return state;
  }
};

export default handleCart;
