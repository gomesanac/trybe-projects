import React from 'react';
import { Link } from 'react-router-dom';
import { tableBody, tableHead } from './getTable';
import './style.css';

function Ranking() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  return (
    <div className="flexbox">
      <div className="size-ranking">
        <h4 data-testid="ranking-title" className="ranking-title">Ranking</h4>
        <div className="ranking-container">
          <table>
            {tableHead()}
            {tableBody(ranking)}
          </table>
          <Link data-testid="btn-go-home" className="btn-start" to="/">INÍCIO</Link>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
