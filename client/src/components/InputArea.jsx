import React from 'react';


function InputArea(props){

    const [titleValue, setTitleValue] = React.useState("");
    const [descriptionValue, setDescriptionValue] = React.useState("");


    function handleTitleChange(event){
        setTitleValue(event.target.value);
    }

    function handleDescriptionChange(event){
        setDescriptionValue(event.target.value);
    }

    function handleSubmit(event){
        props.formSubmit(titleValue, descriptionValue);
        event.preventDefault();
        setTitleValue("");
        setDescriptionValue("");
    }


    return <form onSubmit={handleSubmit}>
            <div className="input-div">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                            <span className="input-group-text task-title">Task Title</span>
                    </div>
                            <input onChange={handleTitleChange} value={titleValue} type="text" className="form-control" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Task Description</span>
                    </div>
                        <textarea onChange={handleDescriptionChange} className="form-control"  value={descriptionValue} aria-label="With textarea"></textarea>
                    </div>
                <button type="submit" className="btn btn-primary input-submit" onClick={props.clicked}>Submit</button>
            </div>
            </form>
}


export default InputArea;