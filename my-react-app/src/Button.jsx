import React, {useState} from 'react';

function Button(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployedStatus] = useState(false);

    const updateName = () =>{
        setName("Gian");
    }

    const updateAge = () =>{
        setAge(age + 1);
    }

    const updateEmployment = () =>{
        setEmployedStatus(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Update Age</button>
            <p>Employment Status: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmployment}>Update Employment</button>
        </div>
    );
}

export default Button