import React from 'react';
import { Link } from 'react-router-dom';

function GetLinks() {
  return (
    <div>
      <Link
        className="button-feedback"
        data-testid="btn-ranking"
        to="/ranking"
      >
        VER RANKING
      </Link>
      <Link
        className="button-feedback"
        data-testid="btn-play-again"
        to="/"
      >
        JOGAR NOVAMENTE
      </Link>
    </div>
  );
}

export default GetLinks;
