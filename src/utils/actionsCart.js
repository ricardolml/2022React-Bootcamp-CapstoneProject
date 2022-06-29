export const addItem = (state, action) => {
  const idProduct = action.payload.id;
  const index = state.items.findIndex(({ id }) => id === idProduct);
  if (index < 0) {
    state.items.push({
      id: idProduct,
      product: {
        name: action.payload.data.name,
        url: action.payload.data.mainimage.url,
      },
      stock: action.payload.data.stock - 1,
      price: action.payload.data.price,
      numItems: 1,
    });
  } else {
    state.items[index].numItems += 1;
    state.items[index].stock -= 1;
  }
  state.numItems += 1;

  return state;
};
