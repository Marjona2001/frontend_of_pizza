export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEMS",
  payload: id,
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEMS",
  payload: id,
});

export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEMS",
  payload: id,
});
