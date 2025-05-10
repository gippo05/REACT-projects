
function Items(props){

    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>
                                                   {item.name}: &nbsp; 
                                                <b>{item.calories}</b></li>);

    itemList.sort((a, b) => a.name.localeCompare(b.name));
    itemList.sort((a,b) => a.calories - b.calories);

    return(
        <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
        </>
        
    )
}

export default Items