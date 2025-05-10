import Items from "./Fruits.jsx";

function App(){

  const fruits =  [{id: 1, name: "Apple", calories: 95},
                     {id: 2, name: "Orange", calories: 84},
                     {id: 3, name: "Banana", calories: 89},
                     {id: 4, name: "Pineapple", calories: 36},
                     {id: 5, name: "Strawberry", calories: 20}];

  const vegetables =  [{id: 6, name: "Celery", calories: 85},
                     {id: 7, name: "Carrots", calories: 104},
                     {id: 8, name: "Eggplant", calories: 29},
                     {id: 9, name: "Potato", calories: 35},
                     {id: 10, name: "Stringbeans", calories: 29}];

  
  
  return(
    <>
      <Items items = {fruits} category = "Fruits"/>
      <Items items = {vegetables} category = "Vegetables"/>
    </>
    
  );
}

export default App