import React, {useState} from 'react';

function UpdateArray(){

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const inputFood = document.getElementById('getFood');
        const storeFood = inputFood.value;
        setFoods(f => [...f, storeFood] )
        inputFood.value = "";
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));

    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((foods, index) =>
                <li key={index} onClick={() => handleRemoveFood(index)}>{foods}</li>)}
            </ul>
            <input type="text" id='getFood'/>
            <button onClick={handleAddFood}>Add</button>
        </div>
    );
}   

export default UpdateArray