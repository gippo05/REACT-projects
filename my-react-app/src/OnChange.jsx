import React, {use, useState} from 'react'

function OnChange(){

const [name, setName] = useState("Guest");
const [quantity, setQuantity] = useState(0);
const [commentArea, setComment] = useState();
const [payment, setPayment] = useState();
const [shipping, setShipping] = useState();


function handleChangeName(e){
    setName(e.target.value);
}

function handleChangeQuantity(e){
    setQuantity(e.target.value);
}

function handleChangeComment(e){
    setComment(e.target.value);
}
function handlePayment(e){
    setPayment(e.target.value)
}
function handleShipping(e){
    setShipping(e.target.value)
}
    return(
        <div>
            <input type="text" value={name} onChange={handleChangeName}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleChangeQuantity}/>
            <p>Quantity: {quantity}</p>

            <textarea value={commentArea} onChange={handleChangeComment}></textarea>
            <p>Comment: {commentArea}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment Method: {payment}</p>

            <input type="radio" 
            value="Delivery" 
            name="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShipping} />

            <label>Delivery</label>
            <br />

            <input
                type="radio"
                value="Pick up"
                name="Deliver"
                checked={shipping === "Pick up"}
                onChange={handleShipping}/>

            <label>Pick up</label>
            <br />

            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default OnChange