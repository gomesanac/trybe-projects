import React from 'react';

const genreArray = [
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.createInput = this.createInput.bind(this);
    this.createTextarea = this.createTextarea.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  changeState(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: (chave === 'rating' ? parseFloat(value) : value) });
  }

  createInput(text, name, type, value) {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          id={name}
          value={value}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  createTextarea(text, name, value) {
    return (
      <label htmlFor={name}>
        {text}
        <textarea
          id={name}
          value={value}
          onChange={(event) => this.changeState(event, name)}
        />
      </label>
    );
  }

  buttonClick() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.createInput('Título', 'title', 'text', this.state.title)}
          {this.createInput('Subtítulo', 'subtitle', 'text', this.state.subtitle)}
          {this.createInput('Imagem', 'imagePath', 'text', this.state.imagePath)}
          {this.createTextarea('Sinopse', 'storyline', this.state.storyline)}
          {this.createInput('Avaliação', 'rating', 'number', this.state.rating)}
          <label htmlFor="genre">Gênero</label>
          <select id="genre" value={this.state.genre} onChange={(event) => this.changeState(event, 'genre')}>
            {genreArray.map(({ text, value }) => (
              <option key={text} value={value}>
                {text}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.buttonClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
