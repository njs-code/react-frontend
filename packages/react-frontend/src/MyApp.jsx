import React, { useState } from 'react';
import Table from './Table';
import Form from "./Form";
 
function MyApp(){
    //defines characters list as state
    const [characters, setCharacters] = useState([]);

    //function to filter/remove a character from the state
    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
          return i !== index;
        });
        setCharacters(updated);
      };

    //function to add a character to the state
    function updateList(person){
        setCharacters([...characters, person]);
    }

    //html for webpage: 
        //table for character display (props pass characters and enable removal)
        //form for new character submission  
    return (
      <div className='container'>
        <Table 
            characterData={characters} 
            removeCharacter={removeOneCharacter}
        />
        <Form handleSubmit={updateList}/>
      </div>
    );
  }
export default MyApp;