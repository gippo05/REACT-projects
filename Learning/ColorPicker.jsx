import React, {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState();
    

    function handleChangeColor(e){
        setColor(e.target.value)
    }

return(
    <div className="color-container">
        <h2>Color Picker</h2>
        <div className="color-change">
            <p style={{backgroundColor: `${color}`} } >Color: {color} </p>
        </div>
        
        <input type="color" onChange={handleChangeColor}/>
    </div>
);

}
export default ColorPicker