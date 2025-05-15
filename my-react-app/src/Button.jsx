

function Button(){

    let count = 0;

    const handleClick = () =>{
        if (count < 3){
            count++;
            console.log(`You clicked me ${count} time/s!`);
        }
        else{
            console.log("Stop fucking clicking me!");
        }
    }

    const handleClick2 = (name) =>{
        console.log(`${name} stop clicking me!`)
    }

    return(
        <button onClick={() => handleClick2("Gian")}>Click Me</button>
    );
}

export default Button