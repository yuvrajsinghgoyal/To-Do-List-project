import { useState } from "react";

function AddTodo({updateList}){
    const [inputeText,setInputText]=useState('');
    return(
        <div>
            <input type="text" 
            value={inputeText}
            placeholder="Addd Your Todo..."
            onChange={e=> setInputText(e.target.value)} />

            <button onClick={()=>{
                updateList(inputeText)
                setInputText('')
                }} >Add</button>
        </div>
    )
}

export default AddTodo;
