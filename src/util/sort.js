// Sort objects of type { id: #, ...} by #
const sortByIdNumber = (a, b) => {
  return a.id - b.id;
};

// Sort objects of type { name: "Item #", ... } by #
const sortByItemNumber = (a, b) => {
  const getItemNumber = (name) => name.split(" ")[1];
  return getItemNumber(a.name) - getItemNumber(b.name);
};

export { sortByIdNumber, sortByItemNumber };
