const rmItemFromArray = (item: string, array: string[]) =>
  array.filter((itemArray) => itemArray !== item);

export default rmItemFromArray;
