/**
    Array.prototype.reduce() function
    Takes array with list items of folowing type:
    {
        name: string;
        listId: number; 
        id: number 
    }
    And reduces it into an object organized by listId.
    The reduced object contains the following key-value types:
    {
        [listId]: {
            id: number,
            name: string,
            values: Array<{ id: number, name: string }>
        }
    }
*/
const reduceListItemsToObject = (object, currentValue) => {
  const { name, listId, id } = currentValue;
  if (name) {
    if (!object[listId]) {
      object[listId] = {
        id: listId,
        name: `List ${listId}`,
        values: [],
      };
    }
    object[listId].values.push({ id, name });
  }
  return object;
};

export { reduceListItemsToObject };
