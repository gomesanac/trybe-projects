import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import '../style/Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      comment: '',
    };
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClean = this.onHandleClean.bind(this);
  }

  onHandleClick(rating) {
    this.setState({ rating });
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  onHandleClean() {
    this.setState({ comment: '', rating: 0 });
  }

  render() {
    const { rating, comment } = this.state;
    const arrStars = [1, 2, 3, 4, 5];
    return (
      <div className="card border-primary mb-3" style={{ width: '18rem' }}>
        <textarea
          className="card-img-top"
          data-testid="product-detail-evaluation"
          onChange={this.onHandleChange}
          rows="8"
          value={comment}
        />
        <div className="card-body">
          <h5 className="card-title">Avaliação</h5>
          { arrStars.map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label htmlFor={index} key={star}>
                <input
                  className="star" type="radio" id={index}
                  onClick={() => this.onHandleClick(ratingValue)}
                />
                <FaStar color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'} size={35} />
              </label>
            );
          }) }
        </div>
        <button className="btn btn-primary" onClick={this.onHandleClean}>Enviar</button>
      </div>
    );
  }
}

export default Rating;
