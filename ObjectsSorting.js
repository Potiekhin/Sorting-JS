////
let array = [
  { id: 3, name: "Aaaaa" },
  { id: 2, name: "Bbbb" },
  { id: 1, name: "Ccccc" },
];

// int sorting
array.sort((a, b) => {
  return a.id - b.id;
});

// string sorting
array.sort((a, b) => {
  const aa = a.name.toLowerCase();
  const bb = b.name.toLowerCase();

  if (aa < bb) {
    return -1;
  }
  if (aa > bb) {
    return 1;
  }
  return 0;
});

console.log(array);
