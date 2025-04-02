import React from 'react';
import Stars from './Stars';

interface MovieCardProps {
  title: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, rating }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <Stars count={rating} />
        <div className="movie-card-actions">
          <button className="movie-card-buy">Купить</button>
          <a href="#" className="movie-card-details">Подробнее →</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;