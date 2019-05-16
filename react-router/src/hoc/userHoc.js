import React from 'react';


const userHoc = (WrappedComponent, WrappedComponent1, arg1) => 
{
    return (props) => (
        <div>
            {arg1} 
            <WrappedComponent {...props}/>
            <WrappedComponent1 {...props}/>
        </div>
    )
    
}

export default userHoc;

