import React from 'react';

const Entries = () => {
    return(
        <div className="flex flex-col w-3/5 h-auto m-10 space-y-2 rounded-md shadow-md"
                style={{
                    backgroundColor: "#222"
                }}
                >
            <div className="text-white flex justify-center pt-5 text-3xl font-bold">Entries</div>
            <div className="flex text-white space-x-6 p-2">
                <h1>#1 Malta</h1>
                <h1>#2 Sonfee</h1>
                <h1>#3 Santra</h1>
            </div>
            <div className="flex justify-between p-3 px-10 bg-yellow-500 font-extrabold text-l ">
                <h1>Name</h1>
                <h1>Cocktail</h1>
                <h1>Points Given</h1>
                <h1>Action</h1>
            </div>
            <div className="flex justify-between p-3 px-6 text-white text-l">
                <h1>abcd</h1>
                <h1>Malta</h1>
                <h1>10</h1>
                <div className="space-x-1">
                    <button className="bg-white px-2 text-black rounded-sm">Edit</button>
                    <button className="bg-white px-2 text-black rounded-sm">Delete</button>
                </div>
            </div>
        </div>
            
       
    )
}

export default Entries;