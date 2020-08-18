const calculateScore = (timer, difficulty) => {
  const difficultyValues = { hard: 3, medium: 2, easy: 1 };
  return 10 + (timer * difficultyValues[difficulty]);
};

export default calculateScore;
