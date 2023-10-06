const countdown = (n) => {
  console.log(n);

  if (n !== 1) {
    setTimeout(() => {
      countdown(n - 1);
    }, [1000]);
  }
};

const result = countdown(10);
