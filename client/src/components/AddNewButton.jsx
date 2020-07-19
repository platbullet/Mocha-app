import React from 'react';


function AddNewButton(props){
    const [mouseOver, setMouseOver] = React.useState(false);

    function handleHover(){
        setMouseOver(!mouseOver)
    }

    return <div className="add-div">
                <a class="add-link" href="#">
                    <button className="round-add-button" onClick={props.onClick}
                                        onMouseOver={handleHover} onMouseOut={handleHover} style={{backgroundColor: mouseOver&& "black"}}>+</button>
                </a>
            </div>;
}

export default AddNewButton;