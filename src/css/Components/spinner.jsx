import React from 'react';

export const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            <br />
            <br />
              <p style={{ color: 'gray', textAlign: 'center' ,height: '100px' ,fontSize: '20px'}}>Please..Wait 🙂</p>
        </div>
    );
}; 