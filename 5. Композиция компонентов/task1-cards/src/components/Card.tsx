import React from 'react';

interface CardProps {
  title: string;
  imageUrl?: string;
  children: React.ReactNode;
  linkUrl?: string; // URL для ссылки в кнопке 
  linkText?: string; // Текст для кнопки 
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  children,
  linkUrl,
  linkText,
}) => {
  return (
    <div className="card">
      {imageUrl && (
        <img src={imageUrl} className="card-img-top" alt="Card image cap" />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{children}</p>
        {/* {linkUrl && linkText && ( */}
          <a href={linkUrl} className="btn btn-primary">
            {linkText}
          </a>
        {/* )} */}
      </div>
    </div>
  );
};

export default Card;