// REACT
import React from 'react';

// COMPONENTS
import Card from '../Card/Card';
import App from '../../../App';

// CSS
import './cardList.css';

const CardList = (props) => {
  return (
    <div className="cards-container">
      <div className='add-hero-button'
           onClick={() => props.handleAddHeroPopup()}
      >
        +
      </div>
      {props.info.map((hero, index) => (
        <Card
          key={`hero-${index}`}
          hero={hero.hero}
          age={hero.age}
          weight={hero.weight}
          height={hero.height}
          description={hero.description}
          image={hero.image}
          handleEdit={() => props.handleEditHero(index)}
          handleDelete={() => props.handleHeroDelete(index)}
        />
      ))}

    </div>
  );
};

export default CardList;