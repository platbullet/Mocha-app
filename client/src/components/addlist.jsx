import React from 'react';
import axios from 'axios';
import uuid from 'react-uuid';


function AddList(){

    const [userValue, setUserValue] = React.useState("");
    const [visible, setVisible] = React.useState("hidden");


    function handleSubmit(event){
        if(userValue!= ""){
        axios.post("/api/users", {
            name: userValue,
            list: [],
            id: uuid(),

        })
        setVisible("visible");
    }
    event.preventDefault();
        

    }

    function handleUserChange(event){
        let temp = event.target.value;
        setUserValue(temp);
    }


    return <form onSubmit={handleSubmit}>
    <div className="input-div">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                    <span className="input-group-text task-title">Add User</span>
            </div>
                    <input onChange={handleUserChange} value={userValue} type="text" className="form-control" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <button type="submit" className="btn btn-primary input-submit" name="add-user">Add</button>
    </div>
    <div className="successful-submit" style={{visibility: visible}}>
        <div>
            <h1> User Change Successful!</h1>
        </div>
    </div>
    </form>
}

export default AddList;