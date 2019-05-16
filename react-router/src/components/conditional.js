import React from 'react';

const Conditional = () => {
    // const value = true;

    const returnValue = () => {
        return true;
    }

    return(
        <div>
            This is {returnValue() ? 'true' : 'false'}
        </div>
    )
}

export default Conditional;