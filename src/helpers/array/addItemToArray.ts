const addItemToArray = (item: string, array: string[]) => [
  ...new Set(array.concat(item)),
];

export default addItemToArray;
