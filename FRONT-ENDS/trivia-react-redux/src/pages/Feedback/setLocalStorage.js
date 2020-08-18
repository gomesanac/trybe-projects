const setLocalStorage = () => {
  const state = (localStorage.getItem('state') !== null)
  ? JSON.parse(localStorage.getItem('state'))
  : { player: { name: '', gravatarEmail: '', assertions: 0, score: 0 } };
  const { name, gravatarEmail, score } = state.player;
  const player = { name, score, picture: gravatarEmail };
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  if (ranking && ranking.length > 0) {
    const updateRaking = JSON.stringify([...ranking, player]);
    return localStorage.setItem('ranking', updateRaking);
  }
  return localStorage.setItem('ranking', JSON.stringify([player]));
};

export default setLocalStorage;
