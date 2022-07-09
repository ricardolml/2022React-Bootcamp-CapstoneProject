export const addItem = (state, action) => {
  // console.log(action.payload.product);
  const { id: idProduct, data } = action.payload.product;
  const numAdd = action.payload.numAdd;
  const index = state.items.findIndex(({ id }) => id === idProduct);
  if (index < 0) {
    state.items.push({
      id: idProduct,
      product: {
        name: data.name,
        url: data.mainimage.url,
      },
      stock: data.stock - numAdd,
      price: data.price,
      numItems: numAdd,
    });
  } else {
    state.items[index].numItems += numAdd;
    state.items[index].stock -= numAdd;
  }
  state.numItems += numAdd;

  return state;
};
