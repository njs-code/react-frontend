import React, {useState} from 'react';

//A function component to handle the input form
function Form(props){
    //defines the characters in the table
    const[person, setPerson] = useState({
        name: "",
        job: ""
    });

    //inner function to remove from list of characters 
    function handleChange(event){
        const{name,value} = event.target;
        if (name === "job") 
            setPerson({ name: person["name"], 
                        job: value});
        else 
            setPerson({
                        name: value, 
                        job:person["job"]});
    }

    //inner function to update list of characters
    function submitForm(){
        props.handleSubmit(person);
        setPerson({name:"", job:""});
    }

    return (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={person.name}
            onChange={handleChange}
          />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            value={person.job}
            onChange={handleChange}
          />
          <input 
            type="button" 
            value="Submit" 
            onClick={submitForm} />
        </form>
      );
}

export default Form;