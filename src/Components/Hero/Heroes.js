// REACT
import React, {useState} from 'react';

// COMPONENTS
import CardList from '../Hero/CardList/cardList';
import HeroFormHandler from '../Hero/heroFormHandler/heroFormHandler';
import {showSuccessMessage, showErrorMessage} from '../Alerts/alertSelector';

// SIDEBAR COMPONENT
import SideBarMenu from '../SidebarMenu/sideBarMenu';


// STYLES
import './Heroes.css';

const Heroes = () => {

  // STATES
  const [heroInfo, setHeroInfo] = useState([
    {
      hero: 'Levi',
      age: 25,
      weight: 70,
      height: 175,
      description: 'An insane feat has been discovered in the jungle, George. Just George, nothing special. He is just there to be there I guess I don\'t know I am Saitama???',
      image: 'https://i.pinimg.com/originals/b4/98/8c/b4988cd0ed6807b25297f31a134fcf64.png'
    },
    {
      hero: 'Superman',
      age: 25,
      weight: 70,
      height: 175,
      description: 'Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster Superman is a superhero who appears in ' +
        'American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster',
      image: 'https://purepng.com/public/uploads/large/purepng.com-supermansupermanfictional-superherocomic-booksdc-comicscharacterjerry-siegelson-of-kryptonaction-comicsman-of-steel-1701528658063zpwu6.png'
    },
    {
      hero: 'Iron Man',
      age: 25,
      weight: 70,
      height: 175,
      description: 'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, ' +
        'and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). ' +
        'Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.',
      image: 'https://pngimg.com/uploads/ironman/ironman_PNG66.png'
    }
  ]);

  // TEMP STORAGE FOR ADDING/EDITING HERO
  const [tempHero, setTempHero] = useState(
    {
      hero: '',
      age: '',
      weight: '',
      height: '',
      description: '',
      image: ''
    }
  );

  // SELECTED INDEX FOR EDITING
  const [selectedIndex, setSelectedIndex] = useState('');

  // SHOW EDIT / ADD HERO MODAL POPUP
  const [showModalForm, setShowModalForm] = useState(false);

  // EDITING / ADDING HERO
  const [editingHero, setEditingHero] = useState(false);
  const [addingHero, setAddingHero] = useState(false);

  // HANDLERS
  const addNewHero = () => {
    const tempHeroInfo = [...heroInfo];

    tempHeroInfo.push(tempHero);

    setHeroInfo(tempHeroInfo);

    setShowModalForm(false);

    showSuccessMessage(`Hero ${tempHero.hero} Added!`, 'Please have a look below for your newly added hero..');
    setTempHero({
      hero: '',
      age: '',
      weight: '',
      height: '',
      description: '',
      image: ''
    });
  };

  const addHeroButton = () => {
    setShowModalForm(true);
    setAddingHero(true);
  };

  const selectedHero = (index) => {
    // SAVE SELECTED INDEX
    setSelectedIndex(index);

    // STORE SELECTED CONTENT USING INDEX
    const storeTempHero = heroInfo[index];

    // SET TEMPHERO CONST TO SELECTED HERO
    setTempHero(storeTempHero);
    // POPUP FOR EDIT HERO
    setShowModalForm(true);
    setAddingHero(false);
    setEditingHero(true);
  };

  const saveEditHero = () => {
    const changedHero = [...heroInfo];

    changedHero[selectedIndex] = tempHero;

    setHeroInfo(changedHero);
    setShowModalForm(false);
    setAddingHero(false);
    setEditingHero(false);

    setTempHero({
      hero: '',
      age: '',
      weight: '',
      height: '',
      description: '',
      image: ''
    });
  };

  const deleteHero = (index) => {
    const tempDeleteHero = [...heroInfo];

    tempDeleteHero.splice(index, 1);

    setHeroInfo(tempDeleteHero);
  };

  const modalClose = () => {
    setTimeout(function () {
      setAddingHero(false);
      setEditingHero(false);
      setTempHero({
        hero: '',
        age: '',
        weight: '',
        height: '',
        description: '',
        image: ''
      });
    }, 100);
    setShowModalForm(false);
    setSelectedIndex('');

  };

  return (
    <React.Fragment>
      <div className='heroes-container'>

        <SideBarMenu/>

        {/* HERO ADD/EDIT FORM */}
        <HeroFormHandler
          /* SHOW HIDE ADD HERO */
          show={showModalForm}
          handleClose={() => modalClose()}

          /* EDITING / ADDING HERO TRUE / FALSE */
          handleEditing={editingHero}
          handleAdding={addingHero}

          /* JAVASCRIPT SPREAD OPERATOR */
          value={tempHero}

          /* SETS NEWHERO VALUES ON KEYSTROKE */
          handleChange={(result) => setTempHero({...tempHero, ...result})}

          /* ADD HERO HANDLER */
          handleAddHero={() => addNewHero()}

          /* SAVING HERO ONCLICK */
          handleSaveHero={() => saveEditHero()}
        />

        {/* HERO DISPLAY LIST */}
        <CardList
          /* ALL HEROS INFO */
          info={heroInfo}

          /* ADD HERO POPUP */
          handleAddHeroPopup={() => addHeroButton(true)}

          /* EDIT HERO HANDLER */
          handleEditHero={(index) => selectedHero(index)}

          /* DELETE HERO HANDLER */
          handleHeroDelete={(index) => deleteHero(index)}
        />
      </div>
    </React.Fragment>
  );
};

export default Heroes;