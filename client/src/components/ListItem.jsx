import React from 'react';

//each list item will have a random color as the border and will be deleted when the delete button is clicked
function ListItem(props){
    const borderStyle = {
        borderColor: props.color
    }

    return <div id="test"><div className="list-item" style={borderStyle}>
                <h1>{props.title}</h1> 
                <p>{props.desc}</p>
                <button onClick={function(){
                    props.deleteClicked(props.id)
                }}className="btn btn-danger delete">Delete</button>
            </div>
            </div> 
}

export default ListItem;