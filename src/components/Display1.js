import React from 'react';

const Display1 = (props) => {

    const {intOrWord} = props;

    if(!isNaN(intOrWord)){
        return(
            <div>
                <h1>Number is: {intOrWord}</h1>
            </div>
        )
    }
    else {
        return(
            <div>
                <h1>Word is: {intOrWord}</h1>
            </div>
        ) 
      }
};


export default Display1;