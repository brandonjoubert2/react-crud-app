// REACT
import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// COMPONENTS
import Heroes from './Components/Hero/Heroes';

const App = () => {
  return (
    <React.Fragment>
      <div className='wrapper'>
        <div className="main-container">
          <BrowserRouter>
            <Routes>
              <Route path='/heroes' element={<Heroes/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;