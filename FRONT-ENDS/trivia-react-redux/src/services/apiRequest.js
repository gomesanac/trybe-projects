const urlToken = 'https://opentdb.com/api_token.php?command=request';

const requestFetch = (url) =>
  fetch(url).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export const fetchApiTriviaToken = () => requestFetch(urlToken)
  .then((json) => localStorage.setItem('token', json.token));

export const fetchApiTriviaQuestions = () => {
  const token = localStorage.getItem('token');
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return requestFetch(url);
};
