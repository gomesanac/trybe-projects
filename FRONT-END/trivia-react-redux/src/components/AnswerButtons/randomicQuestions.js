const randomicQuestions = (array) =>
  array
    .map((item) => ({ sort: Math.random() * Math.random(), value: item }))
    .sort((itemA, itemB) => itemA.sort - itemB.sort)
    .map((item) => item.value);

export default randomicQuestions;
