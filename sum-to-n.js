const sumToNWay1 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const sumToNWay2 = (n) => {
  return n * (n + 1) / 2;
}

const sumToWay3 = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sumToWay3(n - 1);
}

module.exports = {
  sumToNWay1,
  sumToNWay2,
  sumToWay3
}