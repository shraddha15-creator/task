import React, { useState } from 'react';

const AddEntry = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData){
            alert('Please add items');
        }else{
             setItems([...items, inputData]);
             setInputData('')
         }
    }

    return(
        <div className="flex flex-col w-2/5 h-auto m-10 space-y-2 rounded-md shadow-md"
                     style={{
                    backgroundColor: "#222"
                }}
                >
            <div className="text-white flex justify-center pt-5 text-3xl font-bold">Edit Entry</div>
            <label className="text-white px-4">Name</label>
            <input className="rounded mx-4 p-2" 
                type="text" 
                placeholder="Enter name" 
                value={inputData}
                onChange={ (e) => setInputData(e.target.value)}
                 />
            <label className="text-white px-4">select cocktail</label>
            <select className=" rounded mx-4 p-2 pr-4 " type="select" name="selection" placeholder="cocktail">
                <option value="0">Malta</option>
                <option value="1">Santa</option>
                <option value="2">Sonfee</option>
            </select>
            <label className="text-white px-4">Points (0 to 10) </label>
            <input className="rounded mx-4 p-2" type="number" name="points" placeholder="Give points" min="0" max="10" value="1" />
            <div className="flex justify-end space-x-5 pr-2 px-4 py-4 mr-2">
                <button className="bg-white p-2 px-5 font-medium text-xs rounded-sm">Reset</button>
                <button className="bg-yellow-500 p-2 px-5 font-medium text-xs rounded-sm"
                    onClick={addItem}
                >Add</button>
            </div>
         </div>
    )
}

export default AddEntry;