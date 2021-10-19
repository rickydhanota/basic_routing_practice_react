import React from 'react';

const DisplayWordColor = (props) => {

    const { word, fontColor, backgroundColor } = props;
    if(isNaN(word)){
        return(
            <div>
                <h1 style={{ color: fontColor, backgroundColor: backgroundColor }}>Word is: {word}</h1>
            </div>
        )
    }
    else {
        return(
            <div>
                <h1>Number is: {word}</h1>
            </div>
        ) 
      }
};


export default DisplayWordColor;