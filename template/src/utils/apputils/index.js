export default {

  isEmpty: (value) => ['', null, undefined].includes(value),

  delay: (interval) => new Promise((resolve) => {
    setTimeout(resolve, interval);
  }),
};
