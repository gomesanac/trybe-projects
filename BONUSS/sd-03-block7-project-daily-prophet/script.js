window.onload = () => {
  const artigos = document.querySelectorAll('.article-animation');
  for (let i = 0; i < artigos.length; i += 1) {
    const artigo = document.querySelectorAll('.article-animation')[i];
    artigo.addEventListener('click', () => {
      artigo.style.animationPlayState = 'running';
      return true;
    });
  }
};
