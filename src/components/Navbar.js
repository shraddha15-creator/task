import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-between px-4 shadow-md"  
            style={{
            backgroundColor: "#222"
        }}>
            <div className="text-yellow-500 font-bold text-xl p-4 pt-6">FE Task</div>
            <div className="space-x-5 pr-2 py-4">
                <button className="bg-white p-3 px-5 font-extrabold rounded-sm rounded-l-md">info</button>
                <button className="bg-yellow-500 p-3 px-5 font-extrabold rounded-sm rounded-l-md">task</button>
            </div>
        </div>
    )
}

export default Navbar;