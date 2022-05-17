// REACT
import React from 'react'

// STYLE SHEETS
import './heroFormHandler.css'
import {buildTimeValue} from '@testing-library/user-event/dist/utils';

const HeroFormHandler = (props) => {

  return (
    <div className={`outer-container ${props.show ? 'show' : ''}`} onClick={props.handleClose}>
      <div className='container' onClick={e => e.stopPropagation()}>
        <div className='header-container'>
          <h2 className={`${props?.handleAdding ? '' : 'hide-element'}`}>Add Hero</h2>
          <h2 className={`${props?.handleEditing ? '' : 'hide-element'}`}>Edit Hero</h2>
          <button className="close-btn" onClick={props.handleClose}> X </button>
        </div>
        <input className='hero-name form-input'
               placeholder='Name'
               value={props?.value?.hero ?? ''}
               onChange={(event) => props.handleChange({...props.value, hero: event.target.value})}
        />
        <input className='hero-age form-input'
               placeholder='Age'
               value={props?.value?.age ?? ''}
               onChange={(event) => props.handleChange({...props.value, age: event.target.value})}/>

        <input className='hero-weight form-input'
               placeholder='Weight'
               value={props?.value?.weight ?? ''}
               onChange={(event) => props.handleChange({...props.value, weight: event.target.value})}/>

        <input className='hero-height form-input'
               placeholder='Height'
               value={props?.value?.height ?? ''}
               onChange={(event) => props.handleChange({...props.value, height: event.target.value})}/>

        <input className='hero-description form-input'
               placeholder='Description'
               value={props?.value?.description ?? ''}
               onChange={(event) => props.handleChange({...props.value, description: event.target.value})}/>

        <input className='hero-url form-input'
               placeholder='URL'
               value={props?.value?.image ?? ''}
               onChange={(event) => props.handleChange({...props.value, image: event.target.value})}/>

        <div className="button-container">
          <button className={`add-btn form-button ${props?.handleAdding ? '' : 'hide-element'}`} onClick={() => props.handleAddHero()}> Add </button>
          <button className={`save-btn form-button ${props?.handleEditing ? '' : 'hide-element'}`} onClick={() => props.handleSaveHero()}> Save </button>
        </div>
      </div>
    </div>
  )
}

export default HeroFormHandler;