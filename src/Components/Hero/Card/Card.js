// REACT
import React from 'react';

// CSS
import './Card.css';

const Card = (props) => {

  const maxLimit = 150;

  return (
    <div className="box-container"
        onClick={props.handleEdit}>

      {/* IMAGE CONTAINER */}
      <div className="image" style={{backgroundImage: `url(${props.image})`}}/>

      {/* HERO INFO CONTAINER */}
      <div className="info">

        {/* NAME (ROW) */}
        <div className="name">
          <p>
            {props.hero}
          </p>
          <p className="pink-style">
            Hero
          </p>
        </div>

        {/* PROPERTIES (ROW) */}
        <div className="properties">

          {/* AGE PROPERTIES (COLUMN) */}
          <div className="property-details">
            <p>
              {props.age}
            </p>
            <p className="pink-style">
              Age
            </p>
          </div>

          {/* WEIGHT PROPERTIES (COLUMN) */}
          <div className="property-details">
            <p>
              {props.weight} kg
            </p>
            <p className="pink-style">
              Weight
            </p>
          </div>

          {/* HEIGHT PROPERTIES (COLUMN) */}
          <div className="property-details">
            <p>
              {props.height} cm
            </p>
            <p className="pink-style">
              Height
            </p>
          </div>
        </div>

        {/* DESCRIPTION (ROW) */}
        <div className="description">
          { ((props.description).length > maxLimit) ?
            (((props.description).substring(0,maxLimit-3)) + '...') :
            props.description }
        </div>

        {/* BUTTON (ROW) */}
        <div className="btn-delete-container">
          <button
            onClick={() => props.handleEdit()}
            className='btn-edit'>
            Edit
          </button>
          <button
            onClick={() => props.handleDelete()}
            className='btn-delete'>
            Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;