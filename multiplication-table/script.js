// build a multiplication table
// TODO: generate the html
function buildTable(size = 10) {
  // reference:  https://stackoverflow.com/a/10050831
  const depth = [...Array(size + 1).keys()].slice(1);

  for (let i = 1; i <= 10; i++) {
    const width = depth.map((value) => value * i);
    console.log(width);
  }
}

buildTable(12);
