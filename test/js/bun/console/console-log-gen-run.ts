function* gen(req) {
  for (const r of req) {
    yield r;
  }
}

async function* asyncGen(req) {
  for (const r of req) {
    yield await Promise.resolve(r);
  }
}

console.log(gen([]));
console.log(asyncGen([]));
